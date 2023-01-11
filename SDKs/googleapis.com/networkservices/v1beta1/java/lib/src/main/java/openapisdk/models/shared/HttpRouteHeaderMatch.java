package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteHeaderMatch
 * Specifies how to select a route rule based on HTTP request headers.
**/
public class HttpRouteHeaderMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exactMatch")
    public String exactMatch;
    public HttpRouteHeaderMatch withExactMatch(String exactMatch) {
        this.exactMatch = exactMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public String header;
    public HttpRouteHeaderMatch withHeader(String header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invertMatch")
    public Boolean invertMatch;
    public HttpRouteHeaderMatch withInvertMatch(Boolean invertMatch) {
        this.invertMatch = invertMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixMatch")
    public String prefixMatch;
    public HttpRouteHeaderMatch withPrefixMatch(String prefixMatch) {
        this.prefixMatch = prefixMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentMatch")
    public Boolean presentMatch;
    public HttpRouteHeaderMatch withPresentMatch(Boolean presentMatch) {
        this.presentMatch = presentMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rangeMatch")
    public HttpRouteHeaderMatchIntegerRange rangeMatch;
    public HttpRouteHeaderMatch withRangeMatch(HttpRouteHeaderMatchIntegerRange rangeMatch) {
        this.rangeMatch = rangeMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexMatch")
    public String regexMatch;
    public HttpRouteHeaderMatch withRegexMatch(String regexMatch) {
        this.regexMatch = regexMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffixMatch")
    public String suffixMatch;
    public HttpRouteHeaderMatch withSuffixMatch(String suffixMatch) {
        this.suffixMatch = suffixMatch;
        return this;
    }
}