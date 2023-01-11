package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindDevicesByDeviceIdentifierResponse
 * Response containing found devices.
**/
public class FindDevicesByDeviceIdentifierResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public Device[] devices;
    public FindDevicesByDeviceIdentifierResponse withDevices(Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public FindDevicesByDeviceIdentifierResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public FindDevicesByDeviceIdentifierResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}