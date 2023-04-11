import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1HttpsLatencyRoutineData } from "./googlechromemanagementv1httpslatencyroutinedata";
/**
 * Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.
 */
export declare class GoogleChromeManagementV1NetworkDiagnosticsReport extends SpeakeasyBase {
    /**
     * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
     */
    httpsLatencyData?: GoogleChromeManagementV1HttpsLatencyRoutineData;
    /**
     * Output only. Timestamp of when the diagnostics were collected.
     */
    reportTime?: string;
}
