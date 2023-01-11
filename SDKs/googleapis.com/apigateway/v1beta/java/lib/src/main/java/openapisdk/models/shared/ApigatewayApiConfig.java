package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayApiConfig
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
public class ApigatewayApiConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ApigatewayApiConfig withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ApigatewayApiConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayConfig")
    public ApigatewayGatewayConfig gatewayConfig;
    public ApigatewayApiConfig withGatewayConfig(ApigatewayGatewayConfig gatewayConfig) {
        this.gatewayConfig = gatewayConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayServiceAccount")
    public String gatewayServiceAccount;
    public ApigatewayApiConfig withGatewayServiceAccount(String gatewayServiceAccount) {
        this.gatewayServiceAccount = gatewayServiceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcServices")
    public ApigatewayApiConfigGrpcServiceDefinition[] grpcServices;
    public ApigatewayApiConfig withGrpcServices(ApigatewayApiConfigGrpcServiceDefinition[] grpcServices) {
        this.grpcServices = grpcServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApigatewayApiConfig withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedServiceConfigs")
    public ApigatewayApiConfigFile[] managedServiceConfigs;
    public ApigatewayApiConfig withManagedServiceConfigs(ApigatewayApiConfigFile[] managedServiceConfigs) {
        this.managedServiceConfigs = managedServiceConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApigatewayApiConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openapiDocuments")
    public ApigatewayApiConfigOpenApiDocument[] openapiDocuments;
    public ApigatewayApiConfig withOpenapiDocuments(ApigatewayApiConfigOpenApiDocument[] openapiDocuments) {
        this.openapiDocuments = openapiDocuments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public ApigatewayApiConfig withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ApigatewayApiConfigStateEnum state;
    public ApigatewayApiConfig withState(ApigatewayApiConfigStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ApigatewayApiConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}