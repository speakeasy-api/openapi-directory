package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1Device
 * Describes a device reporting Chrome browser information.
**/
public class GoogleChromeManagementV1Device {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public GoogleChromeManagementV1Device withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine")
    public String machine;
    public GoogleChromeManagementV1Device withMachine(String machine) {
        this.machine = machine;
        return this;
    }
}