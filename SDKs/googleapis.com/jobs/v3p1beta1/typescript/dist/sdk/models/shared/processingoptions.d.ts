import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation is not disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY.
 */
export declare enum ProcessingOptionsHtmlSanitizationEnum {
    HtmlSanitizationUnspecified = "HTML_SANITIZATION_UNSPECIFIED",
    HtmlSanitizationDisabled = "HTML_SANITIZATION_DISABLED",
    SimpleFormattingOnly = "SIMPLE_FORMATTING_ONLY"
}
/**
 * Input only. Options for job processing.
 */
export declare class ProcessingOptions extends SpeakeasyBase {
    /**
     * Optional. If set to `true`, the service does not attempt to resolve a more precise address for the job.
     */
    disableStreetAddressResolution?: boolean;
    /**
     * Optional. Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation is not disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY.
     */
    htmlSanitization?: ProcessingOptionsHtmlSanitizationEnum;
}
