import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/recurring/cancel`
 */
export declare class TransferRecurringCancelRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Plaid’s unique identifier for a recurring transfer.
     */
    recurringTransferId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
