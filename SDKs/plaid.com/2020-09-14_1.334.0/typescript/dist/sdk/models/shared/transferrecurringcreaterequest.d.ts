import { SpeakeasyBase } from "../../../internal/utils";
import { ACHClassEnum } from "./achclassenum";
import { TransferNetworkEnum } from "./transfernetworkenum";
import { TransferRecurringSchedule } from "./transferrecurringschedule";
import { TransferTypeEnum } from "./transfertypeenum";
/**
 * Defines the request schema for `/transfer/recurring/create`
 */
export declare class TransferRecurringCreateRequest extends SpeakeasyBase {
    /**
     * The Plaid `access_token` for the account that will be debited or credited. Required if not using `payment_profile_token`.
     */
    accessToken: string;
    /**
     * The Plaid `account_id` corresponding to the end-user account that will be debited or credited. Returned only if `account_id` was set on intent creation.
     */
    accountId: string;
    /**
     * Specifies the use case of the transfer. Required for transfers on an ACH network.
     *
     * @remarks
     *
     * `"ccd"` - Corporate Credit or Debit - fund transfer between two corporate bank accounts
     *
     * `"ppd"` - Prearranged Payment or Deposit - the transfer is part of a pre-existing relationship with a consumer, eg. bill payment
     *
     * `"tel"` - Telephone-Initiated Entry
     *
     * `"web"` - Internet-Initiated Entry - debits from a consumer’s account where their authorization is obtained over the Internet
     */
    achClass?: ACHClassEnum;
    /**
     * The amount of the transfer (decimal string with two digits of precision e.g. "10.00").
     */
    amount: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The description of the recurring transfer.
     */
    description: string;
    /**
     * Information about the device being used to initiate the authorization.
     */
    device: Record<string, any>;
    /**
     * The id of the funding account to use, available in the Plaid Dashboard. This determines which of your business checking accounts will be credited or debited. Defaults to the account configured during onboarding.
     */
    fundingAccountId?: string;
    /**
     * A random key provided by the client, per unique recurring transfer. Maximum of 50 characters.
     *
     * @remarks
     *
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a recurring fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single recurring transfer is created.
     */
    idempotencyKey: string;
    /**
     * The currency of the transfer amount. The default value is "USD".
     */
    isoCurrencyCode?: string;
    /**
     * The network or rails used for the transfer.
     *
     * @remarks
     *
     * For transfers submitted as either `ach` or `same-day-ach` the cutoff for same-day is 9:30 AM Pacific Time and the cutoff for next-day transfers is 5:30 PM Pacific Time. It is recommended to submit a transfer at least 15 minutes before the cutoff time in order to ensure that it will be processed before the cutoff. Any transfer that is indicated as `same-day-ach` and that misses the same-day cutoff, but is submitted in time for the next-day cutoff, will be sent over next-day rails and will not incur same-day charges. Note that both legs of the transfer will be downgraded if applicable.
     */
    network: TransferNetworkEnum;
    /**
     * The schedule that the recurring transfer will be executed on.
     */
    schedule: TransferRecurringSchedule;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a test clock.
     */
    testClockId?: string;
    /**
     * The type of transfer. This will be either `debit` or `credit`.  A `debit` indicates a transfer of money into the origination account; a `credit` indicates a transfer of money out of the origination account.
     */
    type: TransferTypeEnum;
    /**
     * The legal name and other information for the account holder.
     */
    user: Record<string, any>;
    /**
     * If the end user is initiating the specific transfer themselves via an interactive UI, this should be `true`; for automatic recurring payments where the end user is not actually initiating each individual transfer, it should be `false`.
     */
    userPresent: boolean;
}
