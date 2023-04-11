import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteRouteAction } from "./grpcrouterouteaction";
import { GrpcRouteRouteMatch } from "./grpcrouteroutematch";
/**
 * Describes how to route traffic.
 */
export declare class GrpcRouteRouteRule extends SpeakeasyBase {
    /**
     * Specifies how to route matched traffic.
     */
    action?: GrpcRouteRouteAction;
    /**
     * Optional. Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic.
     */
    matches?: GrpcRouteRouteMatch[];
}
