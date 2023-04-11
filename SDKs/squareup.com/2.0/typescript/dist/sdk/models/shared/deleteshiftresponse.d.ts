import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * The response to a request to delete a `Shift`. The response might contain a set of
 *
 * @remarks
 * `Error` objects if the request resulted in errors.
 */
export declare class DeleteShiftResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
