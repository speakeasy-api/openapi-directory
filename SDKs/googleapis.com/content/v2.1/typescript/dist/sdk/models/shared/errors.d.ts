import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A list of errors returned by a failed batch entry.
 */
export declare class Errors extends SpeakeasyBase {
    /**
     * The HTTP status of the first error in `errors`.
     */
    code?: number;
    /**
     * A list of errors.
     */
    errors?: ErrorT[];
    /**
     * The message of the first error in `errors`.
     */
    message?: string;
}
