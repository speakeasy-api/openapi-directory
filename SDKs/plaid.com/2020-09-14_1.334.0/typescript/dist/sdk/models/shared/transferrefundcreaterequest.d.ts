import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/refund/create`
 */
export declare class TransferRefundCreateRequest extends SpeakeasyBase {
    /**
     * The amount of the refund (decimal string with two digits of precision e.g. "10.00").
     */
    amount: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A random key provided by the client, per unique refund. Maximum of 50 characters.
     *
     * @remarks
     *
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a refund fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single refund is created.
     */
    idempotencyKey: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The ID of the transfer to refund.
     */
    transferId: string;
}
