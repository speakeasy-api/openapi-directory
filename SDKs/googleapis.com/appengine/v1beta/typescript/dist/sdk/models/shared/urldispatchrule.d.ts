import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rules to match an HTTP request and dispatch that request to a service.
 */
export declare class UrlDispatchRule extends SpeakeasyBase {
    /**
     * Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".Defaults to matching all domains: "*".
     */
    domain?: string;
    /**
     * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters.
     */
    path?: string;
    /**
     * Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default.
     */
    service?: string;
}
