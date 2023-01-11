package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SlsaProvenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builder")
    public SlsaBuilder builder;
    public SlsaProvenance withBuilder(SlsaBuilder builder) {
        this.builder = builder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public Material[] materials;
    public SlsaProvenance withMaterials(Material[] materials) {
        this.materials = materials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public SlsaMetadata metadata;
    public SlsaProvenance withMetadata(SlsaMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipe")
    public SlsaRecipe recipe;
    public SlsaProvenance withRecipe(SlsaRecipe recipe) {
        this.recipe = recipe;
        return this;
    }
}