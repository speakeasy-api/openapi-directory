import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeaderMatch } from "./httprouteheadermatch";
import { HttpRouteQueryParameterMatch } from "./httproutequeryparametermatch";
/**
 * RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
 */
export declare class HttpRouteRouteMatch extends SpeakeasyBase {
    /**
     * The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used.
     */
    fullPathMatch?: string;
    /**
     * Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.
     */
    headers?: HttpRouteHeaderMatch[];
    /**
     * Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false.
     */
    ignoreCase?: boolean;
    /**
     * The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used.
     */
    prefixMatch?: string;
    /**
     * Specifies a list of query parameters to match against. ALL of the query parameters must be matched.
     */
    queryParameters?: HttpRouteQueryParameterMatch[];
    /**
     * The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used.
     */
    regexMatch?: string;
}
