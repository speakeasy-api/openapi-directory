package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RrSetRoutingPolicy
 * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
**/
public class RrSetRoutingPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo")
    public RrSetRoutingPolicyGeoPolicy geo;
    public RrSetRoutingPolicy withGeo(RrSetRoutingPolicyGeoPolicy geo) {
        this.geo = geo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoPolicy")
    public RrSetRoutingPolicyGeoPolicy geoPolicy;
    public RrSetRoutingPolicy withGeoPolicy(RrSetRoutingPolicyGeoPolicy geoPolicy) {
        this.geoPolicy = geoPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RrSetRoutingPolicy withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryBackup")
    public RrSetRoutingPolicyPrimaryBackupPolicy primaryBackup;
    public RrSetRoutingPolicy withPrimaryBackup(RrSetRoutingPolicyPrimaryBackupPolicy primaryBackup) {
        this.primaryBackup = primaryBackup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrr")
    public RrSetRoutingPolicyWrrPolicy wrr;
    public RrSetRoutingPolicy withWrr(RrSetRoutingPolicyWrrPolicy wrr) {
        this.wrr = wrr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrrPolicy")
    public RrSetRoutingPolicyWrrPolicy wrrPolicy;
    public RrSetRoutingPolicy withWrrPolicy(RrSetRoutingPolicyWrrPolicy wrrPolicy) {
        this.wrrPolicy = wrrPolicy;
        return this;
    }
}