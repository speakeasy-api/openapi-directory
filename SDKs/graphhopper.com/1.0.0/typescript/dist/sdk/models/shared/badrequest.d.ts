import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";
/**
 * Error occurred when reading the request. Request is invalid.
 */
export declare class BadRequest extends SpeakeasyBase {
    /**
     * Optional error information.
     */
    hints?: ErrorMessage[];
    /**
     * Short error message
     */
    message?: string;
    /**
     * status
     */
    status?: string;
}
