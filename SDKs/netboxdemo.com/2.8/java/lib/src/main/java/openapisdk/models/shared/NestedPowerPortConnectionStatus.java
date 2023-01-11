package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NestedPowerPortConnectionStatus {
    @JsonProperty("label")
    public NestedPowerPortConnectionStatusLabelEnum label;
    public NestedPowerPortConnectionStatus withLabel(NestedPowerPortConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public NestedPowerPortConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}