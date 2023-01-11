package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateIngressRulesResponse
 * Response message for Firewall.UpdateAllIngressRules.
**/
public class BatchUpdateIngressRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressRules")
    public FirewallRule[] ingressRules;
    public BatchUpdateIngressRulesResponse withIngressRules(FirewallRule[] ingressRules) {
        this.ingressRules = ingressRules;
        return this;
    }
}