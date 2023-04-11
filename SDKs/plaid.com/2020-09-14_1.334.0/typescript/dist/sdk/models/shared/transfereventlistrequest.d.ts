import { SpeakeasyBase } from "../../../internal/utils";
import { TransferEventListTransferTypeEnum } from "./transfereventlisttransfertypeenum";
import { TransferEventTypeEnum } from "./transfereventtypeenum";
/**
 * Defines the request schema for `/transfer/event/list`
 */
export declare class TransferEventListRequest extends SpeakeasyBase {
    /**
     * The account ID to get events for all transactions to/from an account.
     */
    accountId?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of transfer events to return. If the number of events matching the above parameters is greater than `count`, the most recent events will be returned.
     */
    count?: number;
    /**
     * The end datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    endDate?: Date;
    /**
     * Filter events by event type.
     */
    eventTypes?: TransferEventTypeEnum[];
    /**
     * Filter transfer events to only those with the specified `funding_account_id`.
     */
    fundingAccountId?: string;
    /**
     * The offset into the list of transfer events. When `count`=25 and `offset`=0, the first 25 events will be returned. When `count`=25 and `offset`=25, the next 25 events will be returned.
     */
    offset?: number;
    /**
     * The origination account ID to get events for transfers from a specific origination account.
     */
    originationAccountId?: string;
    /**
     * Filter transfer events to only those with the specified originator client.
     */
    originatorClientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The start datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    startDate?: Date;
    /**
     * Plaid’s unique identifier for a sweep.
     */
    sweepId?: string;
    /**
     * Plaid’s unique identifier for a transfer.
     */
    transferId?: string;
    /**
     * The type of transfer. This will be either `debit` or `credit`.  A `debit` indicates a transfer of money into your origination account; a `credit` indicates a transfer of money out of your origination account.
     */
    transferType?: TransferEventListTransferTypeEnum;
}
