package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayGatewayConfig
 * Configuration settings for Gateways.
**/
public class ApigatewayGatewayConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendConfig")
    public ApigatewayBackendConfig backendConfig;
    public ApigatewayGatewayConfig withBackendConfig(ApigatewayBackendConfig backendConfig) {
        this.backendConfig = backendConfig;
        return this;
    }
}