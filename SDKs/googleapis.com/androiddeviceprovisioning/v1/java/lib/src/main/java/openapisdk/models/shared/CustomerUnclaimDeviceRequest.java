package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerUnclaimDeviceRequest
 * Request message for customer to unclaim a device.
**/
public class CustomerUnclaimDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public DeviceReference device;
    public CustomerUnclaimDeviceRequest withDevice(DeviceReference device) {
        this.device = device;
        return this;
    }
}