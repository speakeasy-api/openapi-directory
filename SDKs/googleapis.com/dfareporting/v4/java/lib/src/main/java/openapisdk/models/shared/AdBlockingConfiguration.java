package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdBlockingConfiguration
 * Campaign ad blocking settings.
**/
public class AdBlockingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public AdBlockingConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}