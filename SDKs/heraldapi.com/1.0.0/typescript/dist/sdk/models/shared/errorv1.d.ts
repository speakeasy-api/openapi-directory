import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A short string indicating the error reported.
 */
export declare enum ErrorV1CodeEnum {
    Unauthorized = "unauthorized",
    NotFound = "not_found",
    HttpNotSupported = "http_not_supported",
    InvalidMethod = "invalid_method",
    InvalidFormat = "invalid_format",
    InvalidRequest = "invalid_request",
    InternalServerError = "internal_server_error"
}
/**
 * Object containing details about an [error](https://www.heraldapi.com/docs/errors).
 */
export declare class ErrorV1 extends SpeakeasyBase {
    /**
     * A short string indicating the error reported.
     */
    code: ErrorV1CodeEnum;
    /**
     * A unique error ID for error tracking and support.
     */
    id: string;
    /**
     * Details about the specific manifestation of the error.
     */
    message: string;
}
