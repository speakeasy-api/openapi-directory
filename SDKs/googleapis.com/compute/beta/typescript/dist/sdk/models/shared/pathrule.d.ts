import { SpeakeasyBase } from "../../../internal/utils";
import { CustomErrorResponsePolicy } from "./customerrorresponsepolicy";
import { HttpRedirectAction } from "./httpredirectaction";
import { HttpRouteAction } from "./httprouteaction";
/**
 * A path-matching rule for a URL. If matched, will use the specified BackendService to handle the traffic arriving at this URL.
 */
export declare class PathRule extends SpeakeasyBase {
    /**
     * Specifies the custom error response policy that must be applied when the backend service or backend bucket responds with an error.
     */
    customErrorResponsePolicy?: CustomErrorResponsePolicy;
    /**
     * The list of path patterns to match. Each must start with / and the only place a * is allowed is at the end following a /. The string fed to the path matcher does not include any text after the first ? or #, and those chars are not allowed here.
     */
    paths?: string[];
    routeAction?: HttpRouteAction;
    /**
     * The full or partial URL of the backend service resource to which traffic is directed if this rule is matched. If routeAction is also specified, advanced routing actions, such as URL rewrites, take effect before sending the request to the backend. However, if service is specified, routeAction cannot contain any weightedBackendServices. Conversely, if routeAction specifies any weightedBackendServices, service must not be specified. Only one of urlRedirect, service or routeAction.weightedBackendService must be set.
     */
    service?: string;
    /**
     * Specifies settings for an HTTP redirect.
     */
    urlRedirect?: HttpRedirectAction;
}
