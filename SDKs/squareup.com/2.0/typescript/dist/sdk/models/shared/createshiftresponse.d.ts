import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Shift } from "./shift";
/**
 * The response to a request to create a `Shift`. The response contains
 *
 * @remarks
 * the created `Shift` object and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class CreateShiftResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A record of the hourly rate, start, and end times for a single work shift
     *
     * @remarks
     * for an employee. This might include a record of the start and end times for breaks
     * taken during the shift.
     */
    shift?: Shift;
}
