import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a user-facing Error.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Additional information about the error.
     */
    details?: Record<string, string>;
    /**
     * The time when the error occurred.
     */
    errorTime?: string;
    /**
     * A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses.
     */
    errorUuid?: string;
    /**
     * A message containing more information about the error that occurred.
     */
    message?: string;
    /**
     * A title that explains the reason for the error.
     */
    reason?: string;
}
