import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error condition this handler applies to.
 */
export declare enum ErrorHandlerErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    ErrorCodeDefault = "ERROR_CODE_DEFAULT",
    ErrorCodeOverQuota = "ERROR_CODE_OVER_QUOTA",
    ErrorCodeDosApiDenial = "ERROR_CODE_DOS_API_DENIAL",
    ErrorCodeTimeout = "ERROR_CODE_TIMEOUT"
}
/**
 * Custom static error page to be served when an error occurs.
 */
export declare class ErrorHandler extends SpeakeasyBase {
    /**
     * Error condition this handler applies to.
     */
    errorCode?: ErrorHandlerErrorCodeEnum;
    /**
     * MIME type of file. Defaults to text/html.
     */
    mimeType?: string;
    /**
     * Static file content to be served for this error.
     */
    staticFile?: string;
}
