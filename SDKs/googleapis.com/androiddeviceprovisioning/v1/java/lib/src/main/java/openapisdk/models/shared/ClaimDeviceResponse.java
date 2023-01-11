package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClaimDeviceResponse
 * Response message containing device id of the claim.
**/
public class ClaimDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public ClaimDeviceResponse withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public ClaimDeviceResponse withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
}