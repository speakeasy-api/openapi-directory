package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodesChildrenCreateNodeInput {
    @JsonProperty("attributes")
    public NodesChildrenCreateNodeAttributesInput attributes;
    public NodesChildrenCreateNodeInput withAttributes(NodesChildrenCreateNodeAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public NodesChildrenCreateNodeInput withType(String type) {
        this.type = type;
        return this;
    }
}