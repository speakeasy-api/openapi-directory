package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallResponseFirewallAppliedTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applied_to_resources")
    public PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources[] appliedToResources;
    public PostFirewallsCreateFirewallResponseFirewallAppliedTo withAppliedToResources(PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources[] appliedToResources) {
        this.appliedToResources = appliedToResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector labelSelector;
    public PostFirewallsCreateFirewallResponseFirewallAppliedTo withLabelSelector(PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostFirewallsCreateFirewallResponseFirewallAppliedToServer server;
    public PostFirewallsCreateFirewallResponseFirewallAppliedTo withServer(PostFirewallsCreateFirewallResponseFirewallAppliedToServer server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum type;
    public PostFirewallsCreateFirewallResponseFirewallAppliedTo withType(PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum type) {
        this.type = type;
        return this;
    }
}