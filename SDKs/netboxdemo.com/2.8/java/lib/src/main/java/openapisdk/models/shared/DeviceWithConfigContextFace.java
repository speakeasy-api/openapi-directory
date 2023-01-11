package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceWithConfigContextFace {
    @JsonProperty("label")
    public DeviceWithConfigContextFaceLabelEnum label;
    public DeviceWithConfigContextFace withLabel(DeviceWithConfigContextFaceLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public DeviceWithConfigContextFaceValueEnum value;
    public DeviceWithConfigContextFace withValue(DeviceWithConfigContextFaceValueEnum value) {
        this.value = value;
        return this;
    }
}