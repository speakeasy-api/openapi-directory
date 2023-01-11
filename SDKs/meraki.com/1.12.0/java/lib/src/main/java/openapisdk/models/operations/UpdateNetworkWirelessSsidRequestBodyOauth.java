package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyOauth
 * The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
**/
public class UpdateNetworkWirelessSsidRequestBodyOauth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedDomains")
    public String[] allowedDomains;
    public UpdateNetworkWirelessSsidRequestBodyOauth withAllowedDomains(String[] allowedDomains) {
        this.allowedDomains = allowedDomains;
        return this;
    }
}