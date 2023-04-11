import { SpeakeasyBase } from "../../../internal/utils";
import { BreakType } from "./breaktype";
import { ErrorT } from "./error";
/**
 * The response to the request to create a `BreakType`. The response contains
 *
 * @remarks
 * the created `BreakType` object and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class CreateBreakTypeResponse extends SpeakeasyBase {
    /**
     * A defined break template that sets an expectation for possible `Break`
     *
     * @remarks
     * instances on a `Shift`.
     */
    breakType?: BreakType;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
