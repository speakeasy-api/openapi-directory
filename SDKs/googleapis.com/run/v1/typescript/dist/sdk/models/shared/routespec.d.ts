import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficTarget } from "./traffictarget";
/**
 * RouteSpec holds the desired state of the Route (from the client).
 */
export declare class RouteSpec extends SpeakeasyBase {
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName.
     */
    traffic?: TrafficTarget[];
}
