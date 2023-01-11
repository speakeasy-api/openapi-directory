package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsCreateFirewallRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apply_to")
    public PostFirewallsCreateFirewallRequestApplyTo[] applyTo;
    public PostFirewallsCreateFirewallRequest withApplyTo(PostFirewallsCreateFirewallRequestApplyTo[] applyTo) {
        this.applyTo = applyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostFirewallsCreateFirewallRequest withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostFirewallsCreateFirewallRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public PostFirewallsCreateFirewallRequestRule[] rules;
    public PostFirewallsCreateFirewallRequest withRules(PostFirewallsCreateFirewallRequestRule[] rules) {
        this.rules = rules;
        return this;
    }
}