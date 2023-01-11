package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum status;
    public PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall withStatus(PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum status) {
        this.status = status;
        return this;
    }
}