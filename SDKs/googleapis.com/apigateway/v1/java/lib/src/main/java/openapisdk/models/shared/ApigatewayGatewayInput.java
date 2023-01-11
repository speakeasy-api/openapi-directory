package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayGatewayInput
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
public class ApigatewayGatewayInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiConfig")
    public String apiConfig;
    public ApigatewayGatewayInput withApiConfig(String apiConfig) {
        this.apiConfig = apiConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ApigatewayGatewayInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApigatewayGatewayInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}