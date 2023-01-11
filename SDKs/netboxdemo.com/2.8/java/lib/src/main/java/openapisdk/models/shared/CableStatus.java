package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CableStatus {
    @JsonProperty("label")
    public CableStatusLabelEnum label;
    public CableStatus withLabel(CableStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public CableStatusValueEnum value;
    public CableStatus withValue(CableStatusValueEnum value) {
        this.value = value;
        return this;
    }
}