import { SpeakeasyBase } from "../../../internal/utils";
import { RRSetRoutingPolicyGeoPolicyGeoPolicyItem } from "./rrsetroutingpolicygeopolicygeopolicyitem";
/**
 * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
 */
export declare class RRSetRoutingPolicyGeoPolicy extends SpeakeasyBase {
    /**
     * Without fencing, if health check fails for all configured items in the current geo bucket, we'll failover to the next nearest geo bucket. With fencing, if health check is enabled, as long as some targets in the current geo bucket are healthy, we'll return only the healthy targets. However, if they're all unhealthy, we won't failover to the next nearest bucket, we'll simply return all the items in the current bucket even though they're unhealthy.
     */
    enableFencing?: boolean;
    /**
     * The primary geo routing configuration. If there are multiple items with the same location, an error is returned instead.
     */
    items?: RRSetRoutingPolicyGeoPolicyGeoPolicyItem[];
    kind?: string;
}
