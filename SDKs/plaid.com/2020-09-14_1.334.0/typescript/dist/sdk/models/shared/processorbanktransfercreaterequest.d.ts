import { SpeakeasyBase } from "../../../internal/utils";
import { ACHClassEnum } from "./achclassenum";
import { BankTransferNetworkEnum } from "./banktransfernetworkenum";
import { BankTransferTypeEnum } from "./banktransfertypeenum";
/**
 * Defines the request schema for `/processor/bank_transfer/create`
 */
export declare class ProcessorBankTransferCreateRequest extends SpeakeasyBase {
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
     * The amount of the bank transfer (decimal string with two digits of precision e.g. "10.00").
     */
    amount: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An arbitrary string provided by the client for storage with the bank transfer. May be up to 100 characters.
     */
    customTag?: string;
    /**
     * The transfer description. Maximum of 10 characters.
     */
    description: string;
    /**
     * A random key provided by the client, per unique bank transfer. Maximum of 50 characters.
     *
     * @remarks
     *
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a bank transfer fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single bank transfer is created.
     */
    idempotencyKey: string;
    /**
     * The currency of the transfer amount – should be set to "USD".
     */
    isoCurrencyCode: string;
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
    /**
     * The network or rails used for the transfer. Valid options are `ach`, `same-day-ach`, or `wire`.
     */
    network: BankTransferNetworkEnum;
    /**
     * Plaid’s unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified.
     */
    originationAccountId?: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     */
    processorToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The type of bank transfer. This will be either `debit` or `credit`.  A `debit` indicates a transfer of money into the origination account; a `credit` indicates a transfer of money out of the origination account.
     */
    type: BankTransferTypeEnum;
    /**
     * The legal name and other information for the account holder.
     */
    user: Record<string, any>;
}
