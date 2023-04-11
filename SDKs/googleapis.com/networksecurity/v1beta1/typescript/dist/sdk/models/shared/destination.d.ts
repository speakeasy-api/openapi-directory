import { SpeakeasyBase } from "../../../internal/utils";
import { HttpHeaderMatch } from "./httpheadermatch";
/**
 * Specification of traffic destination attributes.
 */
export declare class Destination extends SpeakeasyBase {
    /**
     * Required. List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".
     */
    hosts?: string[];
    /**
     * Specification of HTTP header match attributes.
     */
    httpHeaderMatch?: HttpHeaderMatch;
    /**
     * Optional. A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services.
     */
    methods?: string[];
    /**
     * Required. List of destination ports to match. At least one port should match.
     */
    ports?: number[];
}
