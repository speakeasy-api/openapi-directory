package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlsaCompleteness
 * Indicates that the builder claims certain fields in this message to be complete.
**/
public class SlsaCompleteness {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arguments")
    public Boolean arguments;
    public SlsaCompleteness withArguments(Boolean arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public Boolean environment;
    public SlsaCompleteness withEnvironment(Boolean environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public Boolean materials;
    public SlsaCompleteness withMaterials(Boolean materials) {
        this.materials = materials;
        return this;
    }
}