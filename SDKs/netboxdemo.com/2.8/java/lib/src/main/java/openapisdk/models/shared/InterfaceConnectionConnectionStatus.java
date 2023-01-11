package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InterfaceConnectionConnectionStatus {
    @JsonProperty("label")
    public InterfaceConnectionConnectionStatusLabelEnum label;
    public InterfaceConnectionConnectionStatus withLabel(InterfaceConnectionConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public InterfaceConnectionConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}