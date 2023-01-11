package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServers200ApplicationJsonServersPrivateNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias_ips")
    public String[] aliasIps;
    public GetServers200ApplicationJsonServersPrivateNet withAliasIps(String[] aliasIps) {
        this.aliasIps = aliasIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public GetServers200ApplicationJsonServersPrivateNet withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public GetServers200ApplicationJsonServersPrivateNet withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Long network;
    public GetServers200ApplicationJsonServersPrivateNet withNetwork(Long network) {
        this.network = network;
        return this;
    }
}