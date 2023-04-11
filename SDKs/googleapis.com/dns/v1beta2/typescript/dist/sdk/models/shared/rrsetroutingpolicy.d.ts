import { SpeakeasyBase } from "../../../internal/utils";
import { RRSetRoutingPolicyGeoPolicy } from "./rrsetroutingpolicygeopolicy";
import { RRSetRoutingPolicyPrimaryBackupPolicy } from "./rrsetroutingpolicyprimarybackuppolicy";
import { RRSetRoutingPolicyWrrPolicy } from "./rrsetroutingpolicywrrpolicy";
/**
 * A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.
 */
export declare class RRSetRoutingPolicy extends SpeakeasyBase {
    /**
     * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
     */
    geo?: RRSetRoutingPolicyGeoPolicy;
    /**
     * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
     */
    geoPolicy?: RRSetRoutingPolicyGeoPolicy;
    kind?: string;
    /**
     * Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
     */
    primaryBackup?: RRSetRoutingPolicyPrimaryBackupPolicy;
    /**
     * Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
     */
    wrr?: RRSetRoutingPolicyWrrPolicy;
    /**
     * Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.
     */
    wrrPolicy?: RRSetRoutingPolicyWrrPolicy;
}
