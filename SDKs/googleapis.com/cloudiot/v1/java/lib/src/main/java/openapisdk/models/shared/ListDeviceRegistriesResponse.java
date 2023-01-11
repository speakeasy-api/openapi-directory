package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeviceRegistriesResponse
 * Response for `ListDeviceRegistries`.
**/
public class ListDeviceRegistriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceRegistries")
    public DeviceRegistry[] deviceRegistries;
    public ListDeviceRegistriesResponse withDeviceRegistries(DeviceRegistry[] deviceRegistries) {
        this.deviceRegistries = deviceRegistries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDeviceRegistriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}