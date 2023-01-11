package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1ListDevicesResponse
 * Response message that is returned from the ListDevices method.
**/
public class GoogleAppsCloudidentityDevicesV1ListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public GoogleAppsCloudidentityDevicesV1Device[] devices;
    public GoogleAppsCloudidentityDevicesV1ListDevicesResponse withDevices(GoogleAppsCloudidentityDevicesV1Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsCloudidentityDevicesV1ListDevicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}