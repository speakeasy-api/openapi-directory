package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateApplication201ApplicationJsonPrivacy
 * Application privacy config
**/
public class CreateApplication201ApplicationJsonPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("improve_ai")
    public Boolean improveAi;
    public CreateApplication201ApplicationJsonPrivacy withImproveAi(Boolean improveAi) {
        this.improveAi = improveAi;
        return this;
    }
}