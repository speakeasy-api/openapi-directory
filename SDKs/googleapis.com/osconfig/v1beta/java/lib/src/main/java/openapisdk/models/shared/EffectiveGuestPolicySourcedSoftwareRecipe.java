package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EffectiveGuestPolicySourcedSoftwareRecipe
 * A guest policy recipe including its source.
**/
public class EffectiveGuestPolicySourcedSoftwareRecipe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareRecipe")
    public SoftwareRecipe softwareRecipe;
    public EffectiveGuestPolicySourcedSoftwareRecipe withSoftwareRecipe(SoftwareRecipe softwareRecipe) {
        this.softwareRecipe = softwareRecipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public EffectiveGuestPolicySourcedSoftwareRecipe withSource(String source) {
        this.source = source;
        return this;
    }
}