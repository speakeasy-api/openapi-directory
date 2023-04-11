import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
/**
 * The configuration of the canary mode for a service descriptor
 */
export declare class Canary extends SpeakeasyBase {
    /**
     * Use canary mode for this service
     */
    enabled: boolean;
    /**
     * Otoroshi will append this root to any target choosen. If the specified root is '/api/foo', then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar
     */
    root: string;
    /**
     * The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures
     */
    targets: Target[];
    /**
     * Ratio of traffic that will be sent to canary targets.
     */
    traffic: number;
}
