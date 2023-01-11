package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VariantOptionDefinitions {
    @JsonProperty("definitions")
    public VariantOptionDefinition[] definitions;
    public VariantOptionDefinitions withDefinitions(VariantOptionDefinition[] definitions) {
        this.definitions = definitions;
        return this;
    }
}