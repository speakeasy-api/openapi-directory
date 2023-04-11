import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error returned by the API.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The domain of the error.
     */
    domain?: string;
    /**
     * A description of the error.
     */
    message?: string;
    /**
     * The error code.
     */
    reason?: string;
}
