package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RrSetRoutingPolicyWrrPolicy
 * Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
**/
public class RrSetRoutingPolicyWrrPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public RrSetRoutingPolicyWrrPolicyWrrPolicyItem[] items;
    public RrSetRoutingPolicyWrrPolicy withItems(RrSetRoutingPolicyWrrPolicyWrrPolicyItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RrSetRoutingPolicyWrrPolicy withKind(String kind) {
        this.kind = kind;
        return this;
    }
}