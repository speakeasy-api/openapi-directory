package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallResponseFirewall {
    @JsonProperty("applied_to")
    public PostFirewallsCreateFirewallResponseFirewallAppliedTo[] appliedTo;
    public PostFirewallsCreateFirewallResponseFirewall withAppliedTo(PostFirewallsCreateFirewallResponseFirewallAppliedTo[] appliedTo) {
        this.appliedTo = appliedTo;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PostFirewallsCreateFirewallResponseFirewall withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFirewallsCreateFirewallResponseFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostFirewallsCreateFirewallResponseFirewall withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostFirewallsCreateFirewallResponseFirewall withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rules")
    public PostFirewallsCreateFirewallResponseFirewallRule[] rules;
    public PostFirewallsCreateFirewallResponseFirewall withRules(PostFirewallsCreateFirewallResponseFirewallRule[] rules) {
        this.rules = rules;
        return this;
    }
}