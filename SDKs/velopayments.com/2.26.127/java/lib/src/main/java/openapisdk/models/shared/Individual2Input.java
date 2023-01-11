package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Individual2Input {
    @JsonProperty("name")
    public Object name;
    public Individual2Input withName(Object name) {
        this.name = name;
        return this;
    }
}