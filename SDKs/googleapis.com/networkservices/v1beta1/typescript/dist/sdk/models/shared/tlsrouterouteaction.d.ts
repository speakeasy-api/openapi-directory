import { SpeakeasyBase } from "../../../internal/utils";
import { TlsRouteRouteDestination } from "./tlsrouteroutedestination";
/**
 * The specifications for routing traffic and applying associated policies.
 */
export declare class TlsRouteRouteAction extends SpeakeasyBase {
    /**
     * Required. The destination services to which traffic should be forwarded. At least one destination service is required.
     */
    destinations?: TlsRouteRouteDestination[];
}
