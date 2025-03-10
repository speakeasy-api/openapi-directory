import { SpeakeasyBase } from "../../../internal/utils";
/**
 * UrlMaps A host-matching rule for a URL. If matched, will use the named PathMatcher to select the BackendService.
 */
export declare class HostRule extends SpeakeasyBase {
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * The list of host patterns to match. They must be valid hostnames with optional port numbers in the format host:port. * matches any string of ([a-z0-9-.]*). In that case, * must be the first character, and if followed by anything, the immediate following character must be either - or .. * based matching is not supported when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.
     */
    hosts?: string[];
    /**
     * The name of the PathMatcher to use to match the path portion of the URL if the hostRule matches the URL's host portion.
     */
    pathMatcher?: string;
}
