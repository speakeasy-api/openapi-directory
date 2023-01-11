package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum status;
    public GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall withStatus(GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum status) {
        this.status = status;
        return this;
    }
}