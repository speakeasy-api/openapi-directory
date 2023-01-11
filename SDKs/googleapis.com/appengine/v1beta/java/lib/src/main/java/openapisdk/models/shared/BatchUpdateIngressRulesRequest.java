package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateIngressRulesRequest
 * Request message for Firewall.BatchUpdateIngressRules.
**/
public class BatchUpdateIngressRulesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressRules")
    public FirewallRule[] ingressRules;
    public BatchUpdateIngressRulesRequest withIngressRules(FirewallRule[] ingressRules) {
        this.ingressRules = ingressRules;
        return this;
    }
}