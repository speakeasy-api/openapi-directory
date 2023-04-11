import { SpeakeasyBase } from "../../../internal/utils";
import { BankTransferEventListBankTransferTypeEnum } from "./banktransfereventlistbanktransfertypeenum";
import { BankTransferEventListDirectionEnum } from "./banktransfereventlistdirectionenum";
import { BankTransferEventTypeEnum } from "./banktransfereventtypeenum";
/**
 * Defines the request schema for `/bank_transfer/event/list`
 */
export declare class BankTransferEventListRequest extends SpeakeasyBase {
    /**
     * The account ID to get events for all transactions to/from an account.
     */
    accountId?: string;
    /**
     * Plaid’s unique identifier for a bank transfer.
     */
    bankTransferId?: string;
    /**
     * The type of bank transfer. This will be either `debit` or `credit`.  A `debit` indicates a transfer of money into your origination account; a `credit` indicates a transfer of money out of your origination account.
     */
    bankTransferType?: BankTransferEventListBankTransferTypeEnum;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of bank transfer events to return. If the number of events matching the above parameters is greater than `count`, the most recent events will be returned.
     */
    count?: number;
    /**
     * Indicates the direction of the transfer: `outbound`: for API-initiated transfers
     *
     * @remarks
     * `inbound`: for payments received by the FBO account.
     */
    direction?: BankTransferEventListDirectionEnum;
    /**
     * The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    endDate?: Date;
    /**
     * Filter events by event type.
     */
    eventTypes?: BankTransferEventTypeEnum[];
    /**
     * The offset into the list of bank transfer events. When `count`=25 and `offset`=0, the first 25 events will be returned. When `count`=25 and `offset`=25, the next 25 bank transfer events will be returned.
     */
    offset?: number;
    /**
     * The origination account ID to get events for transfers from a specific origination account.
     */
    originationAccountId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    startDate?: Date;
}
