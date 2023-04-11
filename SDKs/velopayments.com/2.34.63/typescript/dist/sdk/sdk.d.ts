import { Countries } from "./countries";
import { Currencies } from "./currencies";
import { Funding } from "./funding";
import { FundingManagerPrivate } from "./fundingmanagerprivate";
import { Login } from "./login";
import * as shared from "./models/shared";
import { PayeeInvitation } from "./payeeinvitation";
import { Payees } from "./payees";
import { PaymentAuditService } from "./paymentauditservice";
import { PaymentAuditServiceDeprecated } from "./paymentauditservicedeprecated";
import { PayorHierarchy } from "./payorhierarchy";
import { Payors } from "./payors";
import { PayorsPrivate } from "./payorsprivate";
import { Payouts } from "./payouts";
import { SourceAccounts } from "./sourceaccounts";
import { Tokens } from "./tokens";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.sandbox.velopayments.com/", "https://api.payouts.velopayments.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * ## Terms and Definitions
 *
 * @remarks
 *
 * Throughout this document and the Velo platform the following terms are used:
 *
 * * **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout.
 * * **Payee.** The recipient of funds paid out by a payor.
 * * **Payment.** A single transfer of funds from a payor to a payee.
 * * **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee.
 * * **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.
 *
 * ## Overview
 *
 * The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:
 *
 * * Authenticate with the Velo platform
 * * Maintain a collection of payees
 * * Query the payor’s current balance of funds within the platform and perform additional funding
 * * Issue payments to payees
 * * Query the platform for a history of those payments
 *
 * This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.
 *
 * ## API Considerations
 *
 * The Velo Payments API is REST based and uses the JSON format for requests and responses.
 *
 * Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.
 *
 * Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).
 *
 * Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.
 *
 * ## Authenticating with the Velo Platform
 *
 * Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.
 *
 * You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:
 *
 * create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529
 *
 * base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==
 *
 * create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==
 *
 * perform the Velo authentication REST call using the HTTP header created above e.g. via curl:
 *
 * ```
 *   curl -X POST \
 *   -H "Content-Type: application/json" \
 *   -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" \
 *   'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials'
 * ```
 *
 * If successful, this call will result in a **200** HTTP status code and a response body such as:
 *
 * ```
 *   {
 *     "access_token":"19f6bafd-93fd-4747-b229-00507bbc991f",
 *     "token_type":"bearer",
 *     "expires_in":1799,
 *     "scope":"..."
 *   }
 * ```
 * ## API access following authentication
 * Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.
 *
 * This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:
 *
 * ```
 *   -H "Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f "
 * ```
 *
 * If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response.
 *
 */
export declare class SDK {
    countries: Countries;
    currencies: Currencies;
    /**
     * <p>APIs for initiating funding of source accounts from external sources and viewing balance updates</p>
     *
     * @remarks
     *
     */
    funding: Funding;
    fundingManagerPrivate: FundingManagerPrivate;
    login: Login;
    /**
     * Payee invitation is a process of inviting individual payees to the Velo platform. In this sction you will find APIs for working with Payee Invitations.
     */
    payeeInvitation: PayeeInvitation;
    /**
     * A payee is a person you wish to transfer money to. In this section you will find API opertions for working with Payees.
     *
     * @remarks
     *
     */
    payees: Payees;
    /**
     * Payment Audit Service APIs allow you to see the history of fundings, payouts, and payments to payees.
     */
    paymentAuditService: PaymentAuditService;
    paymentAuditServiceDeprecated: PaymentAuditServiceDeprecated;
    /**
     * <p>Payors that are part of the same organization can be linked together in a hierarchical fashion</p>
     *
     * @remarks
     * <p>Payors higher up in the tree can read and write data on behalf of payors below them</p>
     * <p>For example Payor A can make payouts on behalf of Payor B if Payor B is linked below Payor A</p>
     * <p>Payors can not access data of payors above them in the hierarchy</p>
     * <p>Contact Velo if you need to link payors in your organization</p>
     *
     */
    payorHierarchy: PayorHierarchy;
    /**
     * A Payor is the entity which is sending money. Here you will find the available APIs for working with Payors.
     */
    payors: Payors;
    payorsPrivate: PayorsPrivate;
    /**
     * <p>Payout APIs allow you to create and instruct payouts to payees</p>
     *
     * @remarks
     * <p>There are three phases to a payout:</p>
     * <ul>
     *     <li>Submit - the payments are created within the platform</li>
     *     <li>Quote - optional step if FX is involved</li>
     *     <li>Instruct - the payments are sent to the payment rails for processing</li>
     * </ul>
     * <p>Between 1 and 2000 payments can be created within the platform as part of a Payout</p>
     *
     */
    payouts: Payouts;
    /**
     * <p>Source Accounts are where funds are drawn from for making payouts</p>
     *
     * @remarks
     *
     */
    sourceAccounts: SourceAccounts;
    /**
     * <p>Verification tokens allow users to complete authenitcation flows such as user invite, MFA registration and password reset</p>
     *
     * @remarks
     * <p>Tokens have an expiry and are one-time use only</p>
     *
     */
    tokens: Tokens;
    users: Users;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
