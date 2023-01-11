package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsIdFirewallResponseFirewall {
    @JsonProperty("applied_to")
    public GetFirewallsIdFirewallResponseFirewallAppliedTo[] appliedTo;
    public GetFirewallsIdFirewallResponseFirewall withAppliedTo(GetFirewallsIdFirewallResponseFirewallAppliedTo[] appliedTo) {
        this.appliedTo = appliedTo;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetFirewallsIdFirewallResponseFirewall withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFirewallsIdFirewallResponseFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetFirewallsIdFirewallResponseFirewall withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetFirewallsIdFirewallResponseFirewall withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rules")
    public GetFirewallsIdFirewallResponseFirewallRule[] rules;
    public GetFirewallsIdFirewallResponseFirewall withRules(GetFirewallsIdFirewallResponseFirewallRule[] rules) {
        this.rules = rules;
        return this;
    }
}