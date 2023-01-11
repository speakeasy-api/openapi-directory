package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules {
    @JsonProperty("access")
    public String access;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules withAccess(String access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIps")
    public String[] allowedIps;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules withAllowedIps(String[] allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @JsonProperty("lanIp")
    public String lanIp;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules withLanIp(String lanIp) {
        this.lanIp = lanIp;
        return this;
    }
    @JsonProperty("localPort")
    public String localPort;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules withLocalPort(String localPort) {
        this.localPort = localPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protocol")
    public String protocol;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("publicPort")
    public String publicPort;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules withPublicPort(String publicPort) {
        this.publicPort = publicPort;
        return this;
    }
}