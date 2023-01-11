package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1TelemetryEvent
 * Telemetry data reported by a managed device.
**/
public class GoogleChromeManagementV1TelemetryEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioSevereUnderrunEvent")
    public java.util.Map<String, Object> audioSevereUnderrunEvent;
    public GoogleChromeManagementV1TelemetryEvent withAudioSevereUnderrunEvent(java.util.Map<String, Object> audioSevereUnderrunEvent) {
        this.audioSevereUnderrunEvent = audioSevereUnderrunEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public GoogleChromeManagementV1TelemetryDeviceInfo device;
    public GoogleChromeManagementV1TelemetryEvent withDevice(GoogleChromeManagementV1TelemetryDeviceInfo device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public GoogleChromeManagementV1TelemetryEventEventTypeEnum eventType;
    public GoogleChromeManagementV1TelemetryEvent withEventType(GoogleChromeManagementV1TelemetryEventEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsLatencyChangeEvent")
    public GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent httpsLatencyChangeEvent;
    public GoogleChromeManagementV1TelemetryEvent withHttpsLatencyChangeEvent(GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent httpsLatencyChangeEvent) {
        this.httpsLatencyChangeEvent = httpsLatencyChangeEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleChromeManagementV1TelemetryEvent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConnectionStateChangeEvent")
    public GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent networkConnectionStateChangeEvent;
    public GoogleChromeManagementV1TelemetryEvent withNetworkConnectionStateChangeEvent(GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent networkConnectionStateChangeEvent) {
        this.networkConnectionStateChangeEvent = networkConnectionStateChangeEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1TelemetryEvent withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public GoogleChromeManagementV1TelemetryUserInfo user;
    public GoogleChromeManagementV1TelemetryEvent withUser(GoogleChromeManagementV1TelemetryUserInfo user) {
        this.user = user;
        return this;
    }
}