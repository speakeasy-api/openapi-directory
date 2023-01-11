package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerPortConnectionStatus {
    @JsonProperty("label")
    public PowerPortConnectionStatusLabelEnum label;
    public PowerPortConnectionStatus withLabel(PowerPortConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public PowerPortConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}