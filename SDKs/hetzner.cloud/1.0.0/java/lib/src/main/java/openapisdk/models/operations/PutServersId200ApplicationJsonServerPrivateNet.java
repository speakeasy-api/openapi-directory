package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutServersId200ApplicationJsonServerPrivateNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias_ips")
    public String[] aliasIps;
    public PutServersId200ApplicationJsonServerPrivateNet withAliasIps(String[] aliasIps) {
        this.aliasIps = aliasIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public PutServersId200ApplicationJsonServerPrivateNet withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public PutServersId200ApplicationJsonServerPrivateNet withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Long network;
    public PutServersId200ApplicationJsonServerPrivateNet withNetwork(Long network) {
        this.network = network;
        return this;
    }
}