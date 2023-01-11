package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServersId200ApplicationJsonServerPrivateNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias_ips")
    public String[] aliasIps;
    public GetServersId200ApplicationJsonServerPrivateNet withAliasIps(String[] aliasIps) {
        this.aliasIps = aliasIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public GetServersId200ApplicationJsonServerPrivateNet withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public GetServersId200ApplicationJsonServerPrivateNet withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Long network;
    public GetServersId200ApplicationJsonServerPrivateNet withNetwork(Long network) {
        this.network = network;
        return this;
    }
}