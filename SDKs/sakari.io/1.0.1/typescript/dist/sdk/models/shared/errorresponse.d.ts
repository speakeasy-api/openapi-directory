import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorResponseError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * invalid request
 */
export declare class ErrorResponse extends SpeakeasyBase {
    error?: ErrorResponseError;
    success?: boolean;
}
