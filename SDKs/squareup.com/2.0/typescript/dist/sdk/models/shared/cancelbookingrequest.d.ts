import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class CancelBookingRequest extends SpeakeasyBase {
    /**
     * The revision number for the booking used for optimistic concurrency.
     */
    bookingVersion?: number;
    /**
     * A unique key to make this request an idempotent operation.
     */
    idempotencyKey?: string;
}
