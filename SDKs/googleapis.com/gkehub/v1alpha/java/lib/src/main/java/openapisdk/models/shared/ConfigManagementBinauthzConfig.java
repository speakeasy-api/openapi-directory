package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementBinauthzConfig
 * Configuration for Binauthz
**/
public class ConfigManagementBinauthzConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public ConfigManagementBinauthzConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}