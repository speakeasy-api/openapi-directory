import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1HttpsLatencyRoutineData } from "./googlechromemanagementv1httpslatencyroutinedata";


export enum GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum {
    HttpsLatencyStateUnspecified = "HTTPS_LATENCY_STATE_UNSPECIFIED",
    Recovery = "RECOVERY",
    Problem = "PROBLEM"
}


// GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent
/** 
 * Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..
**/
export class GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpsLatencyRoutineData" })
  httpsLatencyRoutineData?: GoogleChromeManagementV1HttpsLatencyRoutineData;

  @SpeakeasyMetadata({ data: "json, name=httpsLatencyState" })
  httpsLatencyState?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum;
}
