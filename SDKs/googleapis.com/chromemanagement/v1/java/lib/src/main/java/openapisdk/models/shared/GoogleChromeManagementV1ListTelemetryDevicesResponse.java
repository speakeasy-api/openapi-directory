package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleChromeManagementV1ListTelemetryDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public GoogleChromeManagementV1TelemetryDevice[] devices;
    public GoogleChromeManagementV1ListTelemetryDevicesResponse withDevices(GoogleChromeManagementV1TelemetryDevice[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleChromeManagementV1ListTelemetryDevicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}