import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unauthorized
 */
export declare class ErrorUnauthorized extends SpeakeasyBase {
    /**
     * A human readable description of the error
     */
    error?: string;
    /**
     * A longer description of the error
     */
    message?: string;
    /**
     * The HTTP Status code of the error
     */
    status?: number;
}
