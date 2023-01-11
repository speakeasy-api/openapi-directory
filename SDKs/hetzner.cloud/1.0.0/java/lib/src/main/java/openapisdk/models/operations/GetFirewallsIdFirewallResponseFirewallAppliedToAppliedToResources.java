package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer server;
    public GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources withServer(GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type;
    public GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources withType(GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type) {
        this.type = type;
        return this;
    }
}