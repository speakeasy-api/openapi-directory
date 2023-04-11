import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/bank_transfer/event/sync`
 */
export declare class BankTransferEventSyncRequest extends SpeakeasyBase {
    /**
     * The latest (largest) `event_id` fetched via the sync endpoint, or 0 initially.
     */
    afterId: number;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of bank transfer events to return.
     */
    count?: number;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
