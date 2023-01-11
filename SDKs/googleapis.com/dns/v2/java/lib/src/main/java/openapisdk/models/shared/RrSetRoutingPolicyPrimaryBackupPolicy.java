package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RrSetRoutingPolicyPrimaryBackupPolicy
 * Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
**/
public class RrSetRoutingPolicyPrimaryBackupPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupGeoTargets")
    public RrSetRoutingPolicyGeoPolicy backupGeoTargets;
    public RrSetRoutingPolicyPrimaryBackupPolicy withBackupGeoTargets(RrSetRoutingPolicyGeoPolicy backupGeoTargets) {
        this.backupGeoTargets = backupGeoTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RrSetRoutingPolicyPrimaryBackupPolicy withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryTargets")
    public RrSetRoutingPolicyHealthCheckTargets primaryTargets;
    public RrSetRoutingPolicyPrimaryBackupPolicy withPrimaryTargets(RrSetRoutingPolicyHealthCheckTargets primaryTargets) {
        this.primaryTargets = primaryTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trickleTraffic")
    public Double trickleTraffic;
    public RrSetRoutingPolicyPrimaryBackupPolicy withTrickleTraffic(Double trickleTraffic) {
        this.trickleTraffic = trickleTraffic;
        return this;
    }
}