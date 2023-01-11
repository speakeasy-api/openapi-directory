package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudDataLineageIntegration
 * Configuration for Cloud Data Lineage integration.
**/
public class CloudDataLineageIntegration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CloudDataLineageIntegration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}