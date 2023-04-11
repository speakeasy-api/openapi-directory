import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteHeaderMatch } from "./grpcrouteheadermatch";
import { GrpcRouteMethodMatch } from "./grpcroutemethodmatch";
/**
 * Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
 */
export declare class GrpcRouteRouteMatch extends SpeakeasyBase {
    /**
     * Optional. Specifies a collection of headers to match.
     */
    headers?: GrpcRouteHeaderMatch[];
    /**
     * Specifies a match against a method.
     */
    method?: GrpcRouteMethodMatch;
}
