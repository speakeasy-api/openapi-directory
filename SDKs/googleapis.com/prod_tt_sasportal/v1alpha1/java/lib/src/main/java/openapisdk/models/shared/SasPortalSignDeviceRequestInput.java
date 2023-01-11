package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalSignDeviceRequestInput
 * Request for SignDevice.
**/
public class SasPortalSignDeviceRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public SasPortalDeviceInput device;
    public SasPortalSignDeviceRequestInput withDevice(SasPortalDeviceInput device) {
        this.device = device;
        return this;
    }
}