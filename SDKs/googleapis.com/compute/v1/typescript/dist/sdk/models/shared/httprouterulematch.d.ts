import { SpeakeasyBase } from "../../../internal/utils";
import { HttpHeaderMatch } from "./httpheadermatch";
import { HttpQueryParameterMatch } from "./httpqueryparametermatch";
import { MetadataFilter } from "./metadatafilter";
/**
 * HttpRouteRuleMatch specifies a set of criteria for matching requests to an HttpRouteRule. All specified criteria must be satisfied for a match to occur.
 */
export declare class HttpRouteRuleMatch extends SpeakeasyBase {
    /**
     * For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL. fullPathMatch must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.
     */
    fullPathMatch?: string;
    /**
     * Specifies a list of header match criteria, all of which must match corresponding headers in the request.
     */
    headerMatches?: HttpHeaderMatch[];
    /**
     * Specifies that prefixMatch and fullPathMatch matches are case sensitive. The default value is false. ignoreCase must not be used with regexMatch. Not supported when the URL map is bound to a target gRPC proxy.
     */
    ignoreCase?: boolean;
    /**
     * Opaque filter criteria used by the load balancer to restrict routing configuration to a limited set of xDS compliant clients. In their xDS requests to the load balancer, xDS clients present node metadata. When there is a match, the relevant routing configuration is made available to those proxies. For each metadataFilter in this list, if its filterMatchCriteria is set to MATCH_ANY, at least one of the filterLabels must match the corresponding label provided in the metadata. If its filterMatchCriteria is set to MATCH_ALL, then all of its filterLabels must match with corresponding labels provided in the metadata. If multiple metadata filters are specified, all of them need to be satisfied in order to be considered a match. metadataFilters specified here is applied after those specified in ForwardingRule that refers to the UrlMap this HttpRouteRuleMatch belongs to. metadataFilters only applies to load balancers that have loadBalancingScheme set to INTERNAL_SELF_MANAGED. Not supported when the URL map is bound to a target gRPC proxy that has validateForProxyless field set to true.
     */
    metadataFilters?: MetadataFilter[];
    /**
     * For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. prefixMatch must begin with a /. The value must be from 1 to 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must be specified.
     */
    prefixMatch?: string;
    /**
     * Specifies a list of query parameter match criteria, all of which must match corresponding query parameters in the request. Not supported when the URL map is bound to a target gRPC proxy.
     */
    queryParameterMatches?: HttpQueryParameterMatch[];
    /**
     * For satisfying the matchRule condition, the path of the request must satisfy the regular expression specified in regexMatch after removing any query parameters and anchor supplied with the original URL. For more information about regular expression syntax, see Syntax. Only one of prefixMatch, fullPathMatch or regexMatch must be specified. Regular expressions can only be used when the loadBalancingScheme is set to INTERNAL_SELF_MANAGED.
     */
    regexMatch?: string;
}
