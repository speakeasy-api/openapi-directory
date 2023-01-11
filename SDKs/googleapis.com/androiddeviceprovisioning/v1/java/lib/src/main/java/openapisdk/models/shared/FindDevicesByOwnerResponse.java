package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindDevicesByOwnerResponse
 * Response containing found devices.
**/
public class FindDevicesByOwnerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public Device[] devices;
    public FindDevicesByOwnerResponse withDevices(Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public FindDevicesByOwnerResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public FindDevicesByOwnerResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}