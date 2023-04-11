import { SpeakeasyBase } from "../../../internal/utils";
import { ScanConfigError } from "./scanconfigerror";
/**
 * Indicates the error reason code.
 */
export declare enum ScanRunErrorTraceCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    InternalError = "INTERNAL_ERROR",
    ScanConfigIssue = "SCAN_CONFIG_ISSUE",
    AuthenticationConfigIssue = "AUTHENTICATION_CONFIG_ISSUE",
    TimedOutWhileScanning = "TIMED_OUT_WHILE_SCANNING",
    TooManyRedirects = "TOO_MANY_REDIRECTS",
    TooManyHttpErrors = "TOO_MANY_HTTP_ERRORS",
    StartingUrlsCrawlHttpErrors = "STARTING_URLS_CRAWL_HTTP_ERRORS"
}
/**
 * Output only. Defines an error trace message for a ScanRun.
 */
export declare class ScanRunErrorTrace extends SpeakeasyBase {
    /**
     * Indicates the error reason code.
     */
    code?: ScanRunErrorTraceCodeEnum;
    /**
     * If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most common HTTP error code, if such is available. For example, if this code is 404, the scan has encountered too many NOT_FOUND responses.
     */
    mostCommonHttpErrorCode?: number;
    /**
     * Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.
     */
    scanConfigError?: ScanConfigError;
}
