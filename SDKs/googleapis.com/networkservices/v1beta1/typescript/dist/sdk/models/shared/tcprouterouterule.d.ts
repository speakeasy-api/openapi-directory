import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteAction } from "./tcprouterouteaction";
import { TcpRouteRouteMatch } from "./tcprouteroutematch";
/**
 * Specifies how to match traffic and how to route traffic when traffic is matched.
 */
export declare class TcpRouteRouteRule extends SpeakeasyBase {
    /**
     * The specifications for routing traffic and applying associated policies.
     */
    action?: TcpRouteRouteAction;
    /**
     * Optional. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
     */
    matches?: TcpRouteRouteMatch[];
}
