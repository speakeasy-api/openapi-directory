import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/sandbox/transfer/simulate`
 */
export declare class SandboxTransferSimulateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The asynchronous event to be simulated. May be: `posted`, `settled`, `failed`, or `returned`.
     *
     * @remarks
     *
     * An error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:
     *
     * `pending` --> `failed`
     *
     * `pending` --> `posted`
     *
     * `posted` --> `returned`
     *
     * `posted` --> `settled`
     *
     */
    eventType: string;
    /**
     * The failure reason if the event type for a transfer is `"failed"` or `"returned"`. Null value otherwise.
     */
    failureReason?: Record<string, any>;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a transfer.
     */
    transferId: string;
}
