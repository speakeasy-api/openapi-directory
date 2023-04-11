import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * The response to a request to delete a `BreakType`. The response might contain a set
 *
 * @remarks
 * of `Error` objects if the request resulted in errors.
 */
export declare class DeleteBreakTypeResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
