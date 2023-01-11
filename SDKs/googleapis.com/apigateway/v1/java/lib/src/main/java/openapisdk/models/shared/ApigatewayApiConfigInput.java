package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayApiConfigInput
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
public class ApigatewayApiConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ApigatewayApiConfigInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayServiceAccount")
    public String gatewayServiceAccount;
    public ApigatewayApiConfigInput withGatewayServiceAccount(String gatewayServiceAccount) {
        this.gatewayServiceAccount = gatewayServiceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcServices")
    public ApigatewayApiConfigGrpcServiceDefinition[] grpcServices;
    public ApigatewayApiConfigInput withGrpcServices(ApigatewayApiConfigGrpcServiceDefinition[] grpcServices) {
        this.grpcServices = grpcServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApigatewayApiConfigInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedServiceConfigs")
    public ApigatewayApiConfigFile[] managedServiceConfigs;
    public ApigatewayApiConfigInput withManagedServiceConfigs(ApigatewayApiConfigFile[] managedServiceConfigs) {
        this.managedServiceConfigs = managedServiceConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openapiDocuments")
    public ApigatewayApiConfigOpenApiDocument[] openapiDocuments;
    public ApigatewayApiConfigInput withOpenapiDocuments(ApigatewayApiConfigOpenApiDocument[] openapiDocuments) {
        this.openapiDocuments = openapiDocuments;
        return this;
    }
}