import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/sandbox/bank_transfer/simulate`
 */
export declare class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
    /**
     * Plaid’s unique identifier for a bank transfer.
     */
    bankTransferId: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The asynchronous event to be simulated. May be: `posted`, `failed`, or `reversed`.
     *
     * @remarks
     *
     * An error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:
     *
     * `pending` --> `failed`
     *
     * `pending` --> `posted`
     *
     * `posted` --> `reversed`
     *
     */
    eventType: string;
    /**
     * The failure reason if the type of this transfer is `"failed"` or `"reversed"`. Null value otherwise.
     */
    failureReason?: Record<string, any>;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
