import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
/**
 * Empty response.
 */
export declare class EmptyResponse extends SpeakeasyBase {
    /**
     * Request Error information. The presence of an error field signals that the operation has failed.
     */
    errors?: Errors;
}
