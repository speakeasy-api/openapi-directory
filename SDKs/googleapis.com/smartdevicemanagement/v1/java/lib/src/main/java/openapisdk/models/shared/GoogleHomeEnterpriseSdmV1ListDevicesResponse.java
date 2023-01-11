package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1ListDevicesResponse
 * Response message for SmartDeviceManagementService.ListDevices
**/
public class GoogleHomeEnterpriseSdmV1ListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public GoogleHomeEnterpriseSdmV1Device[] devices;
    public GoogleHomeEnterpriseSdmV1ListDevicesResponse withDevices(GoogleHomeEnterpriseSdmV1Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleHomeEnterpriseSdmV1ListDevicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}