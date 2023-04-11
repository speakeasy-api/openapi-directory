import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Shift } from "./shift";
/**
 * The response to a request for `Shift` objects. The response contains
 *
 * @remarks
 * the requested `Shift` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class SearchShiftsResponse extends SpeakeasyBase {
    /**
     * An opaque cursor for fetching the next page.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Shifts.
     */
    shifts?: Shift[];
}
