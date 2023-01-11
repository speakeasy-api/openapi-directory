package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceGoogleConfig
 * Configuration for the Google Plugin Auth flow.
**/
public class IdentityServiceGoogleConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable")
    public Boolean disable;
    public IdentityServiceGoogleConfig withDisable(Boolean disable) {
        this.disable = disable;
        return this;
    }
}