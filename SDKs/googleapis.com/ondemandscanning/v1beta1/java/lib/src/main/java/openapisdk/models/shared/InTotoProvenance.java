package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InTotoProvenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builderConfig")
    public BuilderConfig builderConfig;
    public InTotoProvenance withBuilderConfig(BuilderConfig builderConfig) {
        this.builderConfig = builderConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public String[] materials;
    public InTotoProvenance withMaterials(String[] materials) {
        this.materials = materials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public Metadata metadata;
    public InTotoProvenance withMetadata(Metadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipe")
    public Recipe recipe;
    public InTotoProvenance withRecipe(Recipe recipe) {
        this.recipe = recipe;
        return this;
    }
}