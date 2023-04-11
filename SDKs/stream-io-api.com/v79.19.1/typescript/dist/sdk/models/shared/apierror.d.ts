import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad request
 */
export declare class APIError extends SpeakeasyBase {
    /**
     * Response HTTP status code
     */
    statusCode: number;
    /**
     * API error code
     */
    code: number;
    /**
     * Additional error-specific information
     */
    details: number[];
    /**
     * Request duration
     */
    duration: string;
    /**
     * Additional error info
     */
    exceptionFields?: Record<string, string>;
    /**
     * Message describing an error
     */
    message: string;
    /**
     * URL with additional information
     */
    moreInfo: string;
}
