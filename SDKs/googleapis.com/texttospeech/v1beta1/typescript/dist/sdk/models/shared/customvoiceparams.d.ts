import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. The usage of the synthesized audio to be reported.
 */
export declare enum CustomVoiceParamsReportedUsageEnum {
    ReportedUsageUnspecified = "REPORTED_USAGE_UNSPECIFIED",
    Realtime = "REALTIME",
    Offline = "OFFLINE"
}
/**
 * Description of the custom voice to be synthesized.
 */
export declare class CustomVoiceParams extends SpeakeasyBase {
    /**
     * Required. The name of the AutoML model that synthesizes the custom voice.
     */
    model?: string;
    /**
     * Optional. The usage of the synthesized audio to be reported.
     */
    reportedUsage?: CustomVoiceParamsReportedUsageEnum;
}
