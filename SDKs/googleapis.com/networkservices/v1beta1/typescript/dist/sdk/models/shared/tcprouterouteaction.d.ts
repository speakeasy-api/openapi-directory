import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteDestination } from "./tcprouteroutedestination";
/**
 * The specifications for routing traffic and applying associated policies.
 */
export declare class TcpRouteRouteAction extends SpeakeasyBase {
    /**
     * Optional. The destination services to which traffic should be forwarded. At least one destination service is required.
     */
    destinations?: TcpRouteRouteDestination[];
    /**
     * Optional. If true, Router will use the destination IP and port of the original connection as the destination of the request. Default is false.
     */
    originalDestination?: boolean;
}
