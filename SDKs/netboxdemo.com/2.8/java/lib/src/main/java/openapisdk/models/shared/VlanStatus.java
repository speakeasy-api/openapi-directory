package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VlanStatus {
    @JsonProperty("label")
    public VlanStatusLabelEnum label;
    public VlanStatus withLabel(VlanStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public VlanStatusValueEnum value;
    public VlanStatus withValue(VlanStatusValueEnum value) {
        this.value = value;
        return this;
    }
}