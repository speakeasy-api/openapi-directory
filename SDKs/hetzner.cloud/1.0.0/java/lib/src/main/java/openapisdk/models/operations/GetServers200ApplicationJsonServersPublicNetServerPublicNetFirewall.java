package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum status;
    public GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall withStatus(GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum status) {
        this.status = status;
        return this;
    }
}