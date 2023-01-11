package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerOutletConnectionStatus {
    @JsonProperty("label")
    public PowerOutletConnectionStatusLabelEnum label;
    public PowerOutletConnectionStatus withLabel(PowerOutletConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public PowerOutletConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}