import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseInfo } from "./responseinfo";
import { RouteResponsePath } from "./routeresponsepath";
/**
 * Routing Result
 */
export declare class RouteResponse extends SpeakeasyBase {
    /**
     * Additional information for your request
     */
    info?: ResponseInfo;
    paths?: RouteResponsePath[];
}
