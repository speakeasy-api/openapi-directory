package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeviceRequestInput
 * Request message for creating a Company Owned device.
**/
public class CreateDeviceRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public DeviceInput device;
    public CreateDeviceRequestInput withDevice(DeviceInput device) {
        this.device = device;
        return this;
    }
}