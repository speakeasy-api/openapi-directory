package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Integrations
 * Available and installed integrations
**/
public class Integrations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public IntegrationFields available;
    public Integrations withAvailable(IntegrationFields available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installed")
    public IntegrationFields installed;
    public Integrations withInstalled(IntegrationFields installed) {
        this.installed = installed;
        return this;
    }
}