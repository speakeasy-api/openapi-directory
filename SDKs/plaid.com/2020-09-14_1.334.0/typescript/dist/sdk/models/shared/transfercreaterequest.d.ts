import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum TransferCreateRequestACHClassEnum {
    Ccd = "ccd",
    Ppd = "ppd",
    Tel = "tel",
    Web = "web"
}
/**
 * The network or rails used for the transfer.
 *
 * @remarks
 *
 * For transfers submitted as either `ach` or `same-day-ach` the cutoff for same-day is 9:30 AM Pacific Time and the cutoff for next-day transfers is 5:30 PM Pacific Time. It is recommended to submit a transfer at least 15 minutes before the cutoff time in order to ensure that it will be processed before the cutoff. Any transfer that is indicated as `same-day-ach` and that misses the same-day cutoff, but is submitted in time for the next-day cutoff, will be sent over next-day rails and will not incur same-day charges. Note that both legs of the transfer will be downgraded if applicable.
 */
export declare enum TransferCreateRequestTransferNetworkEnum {
    Ach = "ach",
    SameDayAch = "same-day-ach",
    Rtp = "rtp"
}
/**
 * The type of transfer. This will be either `debit` or `credit`.  A `debit` indicates a transfer of money into the origination account; a `credit` indicates a transfer of money out of the origination account.
 */
export declare enum TransferCreateRequestTransferTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
/**
 * Defines the request schema for `/transfer/create`
 */
export declare class TransferCreateRequest extends SpeakeasyBase {
    /**
     * The Plaid `access_token` for the account that will be debited or credited. Required if not using `payment_profile_token`.
     */
    accessToken?: string;
    /**
     * The Plaid `account_id` corresponding to the end-user account that will be debited or credited. Returned only if `account_id` was set on intent creation.
     */
    accountId?: string;
    achClass?: TransferCreateRequestACHClassEnum;
    /**
     * The amount of the transfer (decimal string with two digits of precision e.g. "10.00").
     */
    amount?: string;
    /**
     * Plaid’s unique identifier for a transfer authorization. This parameter also serves the purpose of acting as an idempotency identifier.
     */
    authorizationId: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The transfer description. Maximum of 10 characters.
     */
    description: string;
    /**
     * Deprecated. `authorization_id` is now used as idempotency instead.
     *
     * @remarks
     *
     * A random key provided by the client, per unique transfer. Maximum of 50 characters.
     *
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a transfer fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single transfer is created.
     */
    idempotencyKey?: string;
    /**
     * The currency of the transfer amount. The default value is "USD".
     */
    isoCurrencyCode?: string;
    /**
     * The Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply:
     *
     * @remarks
     * The JSON values must be Strings (no nested JSON objects allowed)
     * Only ASCII characters may be used
     * Maximum of 50 key/value pairs
     * Maximum key length of 40 characters
     * Maximum value length of 500 characters
     *
     */
    metadata?: Record<string, string>;
    network?: TransferCreateRequestTransferNetworkEnum;
    /**
     * Plaid’s unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified. Otherwise, this field should be left blank.
     */
    originationAccountId?: string;
    /**
     * The payment profile token associated with the Payment Profile that will be debited or credited. Required if not using `access_token`.
     */
    paymentProfileToken?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    type?: TransferCreateRequestTransferTypeEnum;
    /**
     * The legal name and other information for the account holder.
     */
    user?: Record<string, any>;
}
