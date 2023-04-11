import { SpeakeasyBase } from "../../../internal/utils";
import { RRSetRoutingPolicyGeoPolicy } from "./rrsetroutingpolicygeopolicy";
import { RRSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";
/**
 * Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
 */
export declare class RRSetRoutingPolicyPrimaryBackupPolicy extends SpeakeasyBase {
    /**
     * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
     */
    backupGeoTargets?: RRSetRoutingPolicyGeoPolicy;
    kind?: string;
    /**
     * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
     */
    primaryTargets?: RRSetRoutingPolicyHealthCheckTargets;
    /**
     * When serving state is PRIMARY, this field provides the option of sending a small percentage of the traffic to the backup targets.
     */
    trickleTraffic?: number;
}
