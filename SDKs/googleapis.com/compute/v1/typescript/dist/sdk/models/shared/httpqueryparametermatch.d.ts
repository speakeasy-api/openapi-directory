import { SpeakeasyBase } from "../../../internal/utils";
/**
 * HttpRouteRuleMatch criteria for a request's query parameter.
 */
export declare class HttpQueryParameterMatch extends SpeakeasyBase {
    /**
     * The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch. Only one of presentMatch, exactMatch, or regexMatch must be set.
     */
    exactMatch?: string;
    /**
     * The name of the query parameter to match. The query parameter must exist in the request, in the absence of which the request match fails.
     */
    name?: string;
    /**
     * Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not. Only one of presentMatch, exactMatch, or regexMatch must be set.
     */
    presentMatch?: boolean;
    /**
     * The queryParameterMatch matches if the value of the parameter matches the regular expression specified by regexMatch. For more information about regular expression syntax, see Syntax. Only one of presentMatch, exactMatch, or regexMatch must be set. Regular expressions can only be used when the loadBalancingScheme is set to INTERNAL_SELF_MANAGED.
     */
    regexMatch?: string;
}
