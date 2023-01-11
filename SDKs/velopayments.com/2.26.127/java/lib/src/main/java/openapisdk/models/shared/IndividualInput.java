package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IndividualInput {
    @JsonProperty("name")
    public Object name;
    public IndividualInput withName(Object name) {
        this.name = name;
        return this;
    }
}