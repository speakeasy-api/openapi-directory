package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1HttpsLatencyRoutineData
 * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
**/
public class GoogleChromeManagementV1HttpsLatencyRoutineData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public String latency;
    public GoogleChromeManagementV1HttpsLatencyRoutineData withLatency(String latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("problem")
    public GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum problem;
    public GoogleChromeManagementV1HttpsLatencyRoutineData withProblem(GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum problem) {
        this.problem = problem;
        return this;
    }
}