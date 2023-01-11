package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDevicesResponse
 * Response message that is returned from the ListDevices method.
**/
public class ListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public Device[] devices;
    public ListDevicesResponse withDevices(Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDevicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}