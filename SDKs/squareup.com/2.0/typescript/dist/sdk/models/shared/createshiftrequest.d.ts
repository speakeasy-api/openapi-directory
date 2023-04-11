import { SpeakeasyBase } from "../../../internal/utils";
import { Shift } from "./shift";
/**
 * Represents a request to create a `Shift`.
 */
export declare class CreateShiftRequest extends SpeakeasyBase {
    /**
     * A unique string value to ensure the idempotency of the operation.
     */
    idempotencyKey?: string;
    /**
     * A record of the hourly rate, start, and end times for a single work shift
     *
     * @remarks
     * for an employee. This might include a record of the start and end times for breaks
     * taken during the shift.
     */
    shift: Shift;
}
