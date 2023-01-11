package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CircuitStatus {
    @JsonProperty("label")
    public CircuitStatusLabelEnum label;
    public CircuitStatus withLabel(CircuitStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public CircuitStatusValueEnum value;
    public CircuitStatus withValue(CircuitStatusValueEnum value) {
        this.value = value;
        return this;
    }
}