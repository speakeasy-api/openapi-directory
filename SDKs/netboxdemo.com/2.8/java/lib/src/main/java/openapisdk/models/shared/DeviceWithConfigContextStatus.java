package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceWithConfigContextStatus {
    @JsonProperty("label")
    public DeviceWithConfigContextStatusLabelEnum label;
    public DeviceWithConfigContextStatus withLabel(DeviceWithConfigContextStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public DeviceWithConfigContextStatusValueEnum value;
    public DeviceWithConfigContextStatus withValue(DeviceWithConfigContextStatusValueEnum value) {
        this.value = value;
        return this;
    }
}