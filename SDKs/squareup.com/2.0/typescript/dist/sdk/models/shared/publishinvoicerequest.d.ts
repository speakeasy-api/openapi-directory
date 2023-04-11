import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a `PublishInvoice` request.
 */
export declare class PublishInvoiceRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies the `PublishInvoice` request. If you do not
     *
     * @remarks
     * provide `idempotency_key` (or provide an empty string as the value), the endpoint
     * treats each request as independent.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey?: string;
    /**
     * The version of the [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) to publish.
     *
     * @remarks
     * This must match the current version of the invoice; otherwise, the request is rejected.
     */
    version: number;
}
