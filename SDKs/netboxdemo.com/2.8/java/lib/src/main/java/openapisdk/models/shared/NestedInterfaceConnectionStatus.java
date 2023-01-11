package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NestedInterfaceConnectionStatus {
    @JsonProperty("label")
    public NestedInterfaceConnectionStatusLabelEnum label;
    public NestedInterfaceConnectionStatus withLabel(NestedInterfaceConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public NestedInterfaceConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}