package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer server;
    public GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources withServer(GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum type;
    public GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources withType(GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum type) {
        this.type = type;
        return this;
    }
}