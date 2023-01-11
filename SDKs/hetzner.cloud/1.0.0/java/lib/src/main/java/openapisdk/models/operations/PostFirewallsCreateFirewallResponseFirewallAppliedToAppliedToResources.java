package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer server;
    public PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources withServer(PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type;
    public PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources withType(PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type) {
        this.type = type;
        return this;
    }
}