package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CircuitTerminationConnectionStatus {
    @JsonProperty("label")
    public CircuitTerminationConnectionStatusLabelEnum label;
    public CircuitTerminationConnectionStatus withLabel(CircuitTerminationConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public CircuitTerminationConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}