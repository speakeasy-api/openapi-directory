package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsFirewallsResponseFirewallAppliedTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applied_to_resources")
    public GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources[] appliedToResources;
    public GetFirewallsFirewallsResponseFirewallAppliedTo withAppliedToResources(GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources[] appliedToResources) {
        this.appliedToResources = appliedToResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector labelSelector;
    public GetFirewallsFirewallsResponseFirewallAppliedTo withLabelSelector(GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetFirewallsFirewallsResponseFirewallAppliedToServer server;
    public GetFirewallsFirewallsResponseFirewallAppliedTo withServer(GetFirewallsFirewallsResponseFirewallAppliedToServer server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum type;
    public GetFirewallsFirewallsResponseFirewallAppliedTo withType(GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum type) {
        this.type = type;
        return this;
    }
}