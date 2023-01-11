package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalListDevicesResponse
 * Response for ListDevices.
**/
public class SasPortalListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public SasPortalDevice[] devices;
    public SasPortalListDevicesResponse withDevices(SasPortalDevice[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SasPortalListDevicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}