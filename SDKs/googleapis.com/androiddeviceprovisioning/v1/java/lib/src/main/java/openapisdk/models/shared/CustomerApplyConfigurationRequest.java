package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerApplyConfigurationRequest
 * Request message for customer to assign a configuration to device.
**/
public class CustomerApplyConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public String configuration;
    public CustomerApplyConfigurationRequest withConfiguration(String configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public DeviceReference device;
    public CustomerApplyConfigurationRequest withDevice(DeviceReference device) {
        this.device = device;
        return this;
    }
}