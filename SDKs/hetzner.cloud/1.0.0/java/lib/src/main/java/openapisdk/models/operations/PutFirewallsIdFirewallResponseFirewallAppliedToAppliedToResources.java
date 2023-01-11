package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer server;
    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources withServer(PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type;
    public PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources withType(PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum type) {
        this.type = type;
        return this;
    }
}