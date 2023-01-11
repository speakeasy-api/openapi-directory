package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsAttachToNetworkAttachToNetworkRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias_ips")
    public String[] aliasIps;
    public PostServersIdActionsAttachToNetworkAttachToNetworkRequest withAliasIps(String[] aliasIps) {
        this.aliasIps = aliasIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public PostServersIdActionsAttachToNetworkAttachToNetworkRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("network")
    public Long network;
    public PostServersIdActionsAttachToNetworkAttachToNetworkRequest withNetwork(Long network) {
        this.network = network;
        return this;
    }
}