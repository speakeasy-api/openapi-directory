import { SpeakeasyBase } from "../../../internal/utils";
import { RRSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";
/**
 * A routing block which contains the routing information for one WRR item.
 */
export declare class RRSetRoutingPolicyWrrPolicyWrrPolicyItem extends SpeakeasyBase {
    /**
     * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
     */
    healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets;
    kind?: string;
    rrdatas?: string[];
    /**
     * DNSSEC generated signatures for all the rrdata within this item. Note that if health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 ip per item. .
     */
    signatureRrdatas?: string[];
    /**
     * The weight corresponding to this subset of rrdata. When multiple WeightedRoundRobinPolicyItems are configured, the probability of returning an rrset is proportional to its weight relative to the sum of weights configured for all items. This weight should be non-negative.
     */
    weight?: number;
}
