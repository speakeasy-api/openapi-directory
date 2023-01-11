package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RrSetRoutingPolicyGeoPolicy
 * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
**/
public class RrSetRoutingPolicyGeoPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableFencing")
    public Boolean enableFencing;
    public RrSetRoutingPolicyGeoPolicy withEnableFencing(Boolean enableFencing) {
        this.enableFencing = enableFencing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public RrSetRoutingPolicyGeoPolicyGeoPolicyItem[] items;
    public RrSetRoutingPolicyGeoPolicy withItems(RrSetRoutingPolicyGeoPolicyGeoPolicyItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RrSetRoutingPolicyGeoPolicy withKind(String kind) {
        this.kind = kind;
        return this;
    }
}