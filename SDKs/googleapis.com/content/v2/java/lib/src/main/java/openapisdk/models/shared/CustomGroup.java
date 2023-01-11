package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public CustomAttribute[] attributes;
    public CustomGroup withAttributes(CustomAttribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomGroup withName(String name) {
        this.name = name;
        return this;
    }
}