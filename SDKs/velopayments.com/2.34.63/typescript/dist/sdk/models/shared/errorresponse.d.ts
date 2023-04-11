import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Error response returned by all error conditions in Velo Services
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * a unique identifier to track a request or related sequence of requests
     */
    correlationId?: string;
    /**
     * one or more errors
     */
    errors?: ErrorT[];
    /**
     * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
     */
    httpStatusCode?: number;
}
