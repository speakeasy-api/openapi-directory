package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceFace {
    @JsonProperty("label")
    public DeviceFaceLabelEnum label;
    public DeviceFace withLabel(DeviceFaceLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public DeviceFaceValueEnum value;
    public DeviceFace withValue(DeviceFaceValueEnum value) {
        this.value = value;
        return this;
    }
}