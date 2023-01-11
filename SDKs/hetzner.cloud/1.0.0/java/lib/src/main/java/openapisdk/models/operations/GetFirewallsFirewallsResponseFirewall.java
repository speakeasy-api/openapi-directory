package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsFirewallsResponseFirewall {
    @JsonProperty("applied_to")
    public GetFirewallsFirewallsResponseFirewallAppliedTo[] appliedTo;
    public GetFirewallsFirewallsResponseFirewall withAppliedTo(GetFirewallsFirewallsResponseFirewallAppliedTo[] appliedTo) {
        this.appliedTo = appliedTo;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetFirewallsFirewallsResponseFirewall withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFirewallsFirewallsResponseFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetFirewallsFirewallsResponseFirewall withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetFirewallsFirewallsResponseFirewall withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rules")
    public GetFirewallsFirewallsResponseFirewallRule[] rules;
    public GetFirewallsFirewallsResponseFirewall withRules(GetFirewallsFirewallsResponseFirewallRule[] rules) {
        this.rules = rules;
        return this;
    }
}