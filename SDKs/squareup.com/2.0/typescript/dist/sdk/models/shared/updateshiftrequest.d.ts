import { SpeakeasyBase } from "../../../internal/utils";
import { Shift } from "./shift";
/**
 * A request to update a `Shift` object.
 */
export declare class UpdateShiftRequest extends SpeakeasyBase {
    /**
     * A record of the hourly rate, start, and end times for a single work shift
     *
     * @remarks
     * for an employee. This might include a record of the start and end times for breaks
     * taken during the shift.
     */
    shift: Shift;
}
