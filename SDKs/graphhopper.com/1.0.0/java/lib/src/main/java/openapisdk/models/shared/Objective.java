package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Objective {
    @JsonProperty("type")
    public ObjectiveTypeEnum type;
    public Objective withType(ObjectiveTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public ObjectiveValueEnum value;
    public Objective withValue(ObjectiveValueEnum value) {
        this.value = value;
        return this;
    }
}