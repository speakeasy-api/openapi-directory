package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1NetworkDiagnosticsReport
 * Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.
**/
public class GoogleChromeManagementV1NetworkDiagnosticsReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsLatencyData")
    public GoogleChromeManagementV1HttpsLatencyRoutineData httpsLatencyData;
    public GoogleChromeManagementV1NetworkDiagnosticsReport withHttpsLatencyData(GoogleChromeManagementV1HttpsLatencyRoutineData httpsLatencyData) {
        this.httpsLatencyData = httpsLatencyData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1NetworkDiagnosticsReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
}