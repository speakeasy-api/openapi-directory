package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeAliasIpsRequestBody {
    @JsonProperty("alias_ips")
    public String[] aliasIps;
    public PostServersIdActionsChangeAliasIpsRequestBody withAliasIps(String[] aliasIps) {
        this.aliasIps = aliasIps;
        return this;
    }
    @JsonProperty("network")
    public Long network;
    public PostServersIdActionsChangeAliasIpsRequestBody withNetwork(Long network) {
        this.network = network;
        return this;
    }
}