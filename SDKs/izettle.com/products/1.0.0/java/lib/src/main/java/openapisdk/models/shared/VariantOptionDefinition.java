package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VariantOptionDefinition {
    @JsonProperty("name")
    public String name;
    public VariantOptionDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("properties")
    public VariantOptionProperties[] properties;
    public VariantOptionDefinition withProperties(VariantOptionProperties[] properties) {
        this.properties = properties;
        return this;
    }
}