package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum status;
    public PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall withStatus(PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum status) {
        this.status = status;
        return this;
    }
}