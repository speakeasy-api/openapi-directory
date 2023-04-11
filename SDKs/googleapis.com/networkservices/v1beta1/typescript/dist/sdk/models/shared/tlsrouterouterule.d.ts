import { SpeakeasyBase } from "../../../internal/utils";
import { TlsRouteRouteAction } from "./tlsrouterouteaction";
import { TlsRouteRouteMatch } from "./tlsrouteroutematch";
/**
 * Specifies how to match traffic and how to route traffic when traffic is matched.
 */
export declare class TlsRouteRouteRule extends SpeakeasyBase {
    /**
     * The specifications for routing traffic and applying associated policies.
     */
    action?: TlsRouteRouteAction;
    /**
     * Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation.
     */
    matches?: TlsRouteRouteMatch[];
}
