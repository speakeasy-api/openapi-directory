package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayBackendConfig
 * Configuration for all backends.
**/
public class ApigatewayBackendConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleServiceAccount")
    public String googleServiceAccount;
    public ApigatewayBackendConfig withGoogleServiceAccount(String googleServiceAccount) {
        this.googleServiceAccount = googleServiceAccount;
        return this;
    }
}