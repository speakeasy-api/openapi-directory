package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RrSetRoutingPolicyGeoPolicyGeoPolicyItem
 * ResourceRecordSet data for one geo location.
**/
public class RrSetRoutingPolicyGeoPolicyGeoPolicyItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckedTargets")
    public RrSetRoutingPolicyHealthCheckTargets healthCheckedTargets;
    public RrSetRoutingPolicyGeoPolicyGeoPolicyItem withHealthCheckedTargets(RrSetRoutingPolicyHealthCheckTargets healthCheckedTargets) {
        this.healthCheckedTargets = healthCheckedTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RrSetRoutingPolicyGeoPolicyGeoPolicyItem withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public RrSetRoutingPolicyGeoPolicyGeoPolicyItem withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrdatas")
    public String[] rrdatas;
    public RrSetRoutingPolicyGeoPolicyGeoPolicyItem withRrdatas(String[] rrdatas) {
        this.rrdatas = rrdatas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureRrdatas")
    public String[] signatureRrdatas;
    public RrSetRoutingPolicyGeoPolicyGeoPolicyItem withSignatureRrdatas(String[] signatureRrdatas) {
        this.signatureRrdatas = signatureRrdatas;
        return this;
    }
}