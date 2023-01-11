package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Variant
 * APK that is suitable for inclusion in a system image. The resource of SystemApksService.
**/
public class Variant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSpec")
    public DeviceSpec deviceSpec;
    public Variant withDeviceSpec(DeviceSpec deviceSpec) {
        this.deviceSpec = deviceSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variantId")
    public Long variantId;
    public Variant withVariantId(Long variantId) {
        this.variantId = variantId;
        return this;
    }
}