package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceId
 * Identifier of a device.
**/
public class DeviceId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBrand")
    public String buildBrand;
    public DeviceId withBuildBrand(String buildBrand) {
        this.buildBrand = buildBrand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildDevice")
    public String buildDevice;
    public DeviceId withBuildDevice(String buildDevice) {
        this.buildDevice = buildDevice;
        return this;
    }
}