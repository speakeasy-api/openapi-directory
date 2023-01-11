package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication
 * The current setting for password-based authentication.
**/
public class UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}