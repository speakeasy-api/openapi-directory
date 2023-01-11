package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GatewayConfig
 * Gateway-related configuration and state.
**/
public class GatewayConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayAuthMethod")
    public GatewayConfigGatewayAuthMethodEnum gatewayAuthMethod;
    public GatewayConfig withGatewayAuthMethod(GatewayConfigGatewayAuthMethodEnum gatewayAuthMethod) {
        this.gatewayAuthMethod = gatewayAuthMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayType")
    public GatewayConfigGatewayTypeEnum gatewayType;
    public GatewayConfig withGatewayType(GatewayConfigGatewayTypeEnum gatewayType) {
        this.gatewayType = gatewayType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAccessedGatewayId")
    public String lastAccessedGatewayId;
    public GatewayConfig withLastAccessedGatewayId(String lastAccessedGatewayId) {
        this.lastAccessedGatewayId = lastAccessedGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAccessedGatewayTime")
    public String lastAccessedGatewayTime;
    public GatewayConfig withLastAccessedGatewayTime(String lastAccessedGatewayTime) {
        this.lastAccessedGatewayTime = lastAccessedGatewayTime;
        return this;
    }
}