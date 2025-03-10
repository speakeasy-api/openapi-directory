/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent - Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem. * Granular permission needed: TELEMETRY_API_NETWORK_REPORT
 */
public class GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent {
    /**
     * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsLatencyRoutineData")
    public GoogleChromeManagementV1HttpsLatencyRoutineData httpsLatencyRoutineData;

    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent withHttpsLatencyRoutineData(GoogleChromeManagementV1HttpsLatencyRoutineData httpsLatencyRoutineData) {
        this.httpsLatencyRoutineData = httpsLatencyRoutineData;
        return this;
    }
    
    /**
     * Current HTTPS latency state.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsLatencyState")
    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum httpsLatencyState;

    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent withHttpsLatencyState(GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventHttpsLatencyStateEnum httpsLatencyState) {
        this.httpsLatencyState = httpsLatencyState;
        return this;
    }
    
    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent(){}
}
