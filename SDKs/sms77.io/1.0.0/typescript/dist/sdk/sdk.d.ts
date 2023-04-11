import { Analytics } from "./analytics";
import { Balance } from "./balance";
import { Contacts } from "./contacts";
import { Hooks } from "./hooks";
import { Lookup } from "./lookup";
import * as shared from "./models/shared";
import { Pricing } from "./pricing";
import { Sms } from "./sms";
import { Status } from "./status";
import { ValidateForVoice } from "./validateforvoice";
import { Voice } from "./voice";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://gateway.sms77.io/api"];
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
 * sms77.io Swagger API. Get your API-Key now at sms77.io.
 *
 * @see {@link https://sms77.io/en/docs/gateway/http-api} - Find out more about the Sms77.io SMS gateway.
 */
export declare class SDK {
    /**
     *
     * @see {@link https://www.sms77.io/en/docs/gateway/http-api/analytics} - Retrieve analytics
     */
    analytics: Analytics;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api/credit-balance} - Retrieve account balance
     */
    balance: Balance;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api/contacts} - Retrieve/edit/delete contact(s)
     */
    contacts: Contacts;
    /**
     *
     * @see {@link https://www.sms77.io/en/docs/gateway/http-api/webhooks/} - Create, view and delete webhooks
     */
    hooks: Hooks;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api} - Get number format, CNAM,- HLR- or MNP information for given phone number
     */
    lookup: Lookup;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api/pricing} - Retrieve pricing information
     */
    pricing: Pricing;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api/sms-disptach} - Send one/multiple SMS
     */
    sms: Sms;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api/status-reports} - Retrieve the status for a sent SMS with the given ID
     */
    status: Status;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api/caller-ids} - Validate caller ID for voice Voice API
     */
    validateForVoice: ValidateForVoice;
    /**
     *
     * @see {@link https://sms77.io/en/docs/gateway/http-api/voice} - Issue voice call to phone number
     */
    voice: Voice;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
