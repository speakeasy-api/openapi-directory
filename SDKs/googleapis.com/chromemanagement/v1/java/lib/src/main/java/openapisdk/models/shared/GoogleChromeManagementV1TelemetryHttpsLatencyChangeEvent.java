package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent
 * Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..
**/
public class GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsLatencyRoutineData")
    public GoogleChromeManagementV1HttpsLatencyRoutineData httpsLatencyRoutineData;
    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent withHttpsLatencyRoutineData(GoogleChromeManagementV1HttpsLatencyRoutineData httpsLatencyRoutineData) {
        this.httpsLatencyRoutineData = httpsLatencyRoutineData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsLatencyState")
    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum httpsLatencyState;
    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent withHttpsLatencyState(GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum httpsLatencyState) {
        this.httpsLatencyState = httpsLatencyState;
        return this;
    }
}