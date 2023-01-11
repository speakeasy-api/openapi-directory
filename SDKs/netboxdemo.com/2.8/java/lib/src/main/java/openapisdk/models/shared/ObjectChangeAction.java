package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObjectChangeAction {
    @JsonProperty("label")
    public ObjectChangeActionLabelEnum label;
    public ObjectChangeAction withLabel(ObjectChangeActionLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public ObjectChangeActionValueEnum value;
    public ObjectChangeAction withValue(ObjectChangeActionValueEnum value) {
        this.value = value;
        return this;
    }
}