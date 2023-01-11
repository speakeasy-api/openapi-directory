package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIngressRulesResponse
 * Response message for Firewall.ListIngressRules.
**/
public class ListIngressRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressRules")
    public FirewallRule[] ingressRules;
    public ListIngressRulesResponse withIngressRules(FirewallRule[] ingressRules) {
        this.ingressRules = ingressRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListIngressRulesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}