package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent
 * `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes.
**/
public class GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionState")
    public GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum connectionState;
    public GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent withConnectionState(GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;
    public GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}