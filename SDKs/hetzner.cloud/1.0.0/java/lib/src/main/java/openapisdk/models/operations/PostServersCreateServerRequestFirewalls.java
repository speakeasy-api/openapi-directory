package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersCreateServerRequestFirewalls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewall")
    public Long firewall;
    public PostServersCreateServerRequestFirewalls withFirewall(Long firewall) {
        this.firewall = firewall;
        return this;
    }
}