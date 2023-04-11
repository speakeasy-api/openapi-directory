import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteHeaderMatchIntegerRange } from "./httprouteheadermatchintegerrange";
/**
 * Specifies how to select a route rule based on HTTP request headers.
 */
export declare class HttpRouteHeaderMatch extends SpeakeasyBase {
    /**
     * The value of the header should match exactly the content of exact_match.
     */
    exactMatch?: string;
    /**
     * The name of the HTTP header to match against.
     */
    header?: string;
    /**
     * If specified, the match result will be inverted before checking. Default value is set to false.
     */
    invertMatch?: boolean;
    /**
     * The value of the header must start with the contents of prefix_match.
     */
    prefixMatch?: string;
    /**
     * A header with header_name must exist. The match takes place whether or not the header has a value.
     */
    presentMatch?: boolean;
    /**
     * Represents an integer value range.
     */
    rangeMatch?: HttpRouteHeaderMatchIntegerRange;
    /**
     * The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax
     */
    regexMatch?: string;
    /**
     * The value of the header must end with the contents of suffix_match.
     */
    suffixMatch?: string;
}
