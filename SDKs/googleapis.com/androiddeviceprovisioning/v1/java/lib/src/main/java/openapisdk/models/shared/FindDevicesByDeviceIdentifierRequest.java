package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindDevicesByDeviceIdentifierRequest
 * Request to find devices.
**/
public class FindDevicesByDeviceIdentifierRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceIdentifier")
    public DeviceIdentifier deviceIdentifier;
    public FindDevicesByDeviceIdentifierRequest withDeviceIdentifier(DeviceIdentifier deviceIdentifier) {
        this.deviceIdentifier = deviceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public String limit;
    public FindDevicesByDeviceIdentifierRequest withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public FindDevicesByDeviceIdentifierRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}