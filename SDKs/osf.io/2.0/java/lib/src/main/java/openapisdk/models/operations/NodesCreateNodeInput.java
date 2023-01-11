package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodesCreateNodeInput {
    @JsonProperty("attributes")
    public NodesCreateNodeAttributesInput attributes;
    public NodesCreateNodeInput withAttributes(NodesCreateNodeAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public NodesCreateNodeInput withType(String type) {
        this.type = type;
        return this;
    }
}