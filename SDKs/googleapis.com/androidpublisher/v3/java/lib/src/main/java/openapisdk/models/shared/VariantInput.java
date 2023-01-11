package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VariantInput
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
**/
public class VariantInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSpec")
    public DeviceSpec deviceSpec;
    public VariantInput withDeviceSpec(DeviceSpec deviceSpec) {
        this.deviceSpec = deviceSpec;
        return this;
    }
}