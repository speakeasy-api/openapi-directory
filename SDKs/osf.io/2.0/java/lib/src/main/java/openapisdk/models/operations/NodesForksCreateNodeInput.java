package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodesForksCreateNodeInput {
    @JsonProperty("attributes")
    public NodesForksCreateNodeAttributesInput attributes;
    public NodesForksCreateNodeInput withAttributes(NodesForksCreateNodeAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public NodesForksCreateNodeInput withType(String type) {
        this.type = type;
        return this;
    }
}