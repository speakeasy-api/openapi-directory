package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributesInput
 * A container for all the attributes for a given location.
**/
public class AttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AttributeInput[] attributes;
    public AttributesInput withAttributes(AttributeInput[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AttributesInput withName(String name) {
        this.name = name;
        return this;
    }
}