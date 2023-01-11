package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSettingsRequestBodySecureConnect
 * A hash of SecureConnect options applied to the Network.
**/
public class UpdateNetworkSettingsRequestBodySecureConnect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkSettingsRequestBodySecureConnect withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}