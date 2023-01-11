package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RrSetRoutingPolicyWrrPolicyWrrPolicyItem
 * A routing block which contains the routing information for one WRR item.
**/
public class RrSetRoutingPolicyWrrPolicyWrrPolicyItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckedTargets")
    public RrSetRoutingPolicyHealthCheckTargets healthCheckedTargets;
    public RrSetRoutingPolicyWrrPolicyWrrPolicyItem withHealthCheckedTargets(RrSetRoutingPolicyHealthCheckTargets healthCheckedTargets) {
        this.healthCheckedTargets = healthCheckedTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RrSetRoutingPolicyWrrPolicyWrrPolicyItem withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrdatas")
    public String[] rrdatas;
    public RrSetRoutingPolicyWrrPolicyWrrPolicyItem withRrdatas(String[] rrdatas) {
        this.rrdatas = rrdatas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureRrdatas")
    public String[] signatureRrdatas;
    public RrSetRoutingPolicyWrrPolicyWrrPolicyItem withSignatureRrdatas(String[] signatureRrdatas) {
        this.signatureRrdatas = signatureRrdatas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Double weight;
    public RrSetRoutingPolicyWrrPolicyWrrPolicyItem withWeight(Double weight) {
        this.weight = weight;
        return this;
    }
}