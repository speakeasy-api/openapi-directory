package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFirewallsIdFirewallResponseFirewall {
    @JsonProperty("applied_to")
    public PutFirewallsIdFirewallResponseFirewallAppliedTo[] appliedTo;
    public PutFirewallsIdFirewallResponseFirewall withAppliedTo(PutFirewallsIdFirewallResponseFirewallAppliedTo[] appliedTo) {
        this.appliedTo = appliedTo;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PutFirewallsIdFirewallResponseFirewall withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutFirewallsIdFirewallResponseFirewall withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutFirewallsIdFirewallResponseFirewall withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutFirewallsIdFirewallResponseFirewall withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rules")
    public PutFirewallsIdFirewallResponseFirewallRule[] rules;
    public PutFirewallsIdFirewallResponseFirewall withRules(PutFirewallsIdFirewallResponseFirewallRule[] rules) {
        this.rules = rules;
        return this;
    }
}