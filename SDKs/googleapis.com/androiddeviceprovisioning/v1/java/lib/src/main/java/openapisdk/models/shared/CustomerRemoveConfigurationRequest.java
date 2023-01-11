package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerRemoveConfigurationRequest
 * Request message for customer to remove the configuration from device.
**/
public class CustomerRemoveConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public DeviceReference device;
    public CustomerRemoveConfigurationRequest withDevice(DeviceReference device) {
        this.device = device;
        return this;
    }
}