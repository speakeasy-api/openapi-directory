package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceStatus {
    @JsonProperty("label")
    public DeviceStatusLabelEnum label;
    public DeviceStatus withLabel(DeviceStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public DeviceStatusValueEnum value;
    public DeviceStatus withValue(DeviceStatusValueEnum value) {
        this.value = value;
        return this;
    }
}