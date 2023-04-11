import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1HttpsLatencyRoutineData } from "./googlechromemanagementv1httpslatencyroutinedata";
/**
 * Current HTTPS latency state.
 */
export declare enum GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum {
    HttpsLatencyStateUnspecified = "HTTPS_LATENCY_STATE_UNSPECIFIED",
    Recovery = "RECOVERY",
    Problem = "PROBLEM"
}
/**
 * Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..
 */
export declare class GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent extends SpeakeasyBase {
    /**
     * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
     */
    httpsLatencyRoutineData?: GoogleChromeManagementV1HttpsLatencyRoutineData;
    /**
     * Current HTTPS latency state.
     */
    httpsLatencyState?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum;
}
