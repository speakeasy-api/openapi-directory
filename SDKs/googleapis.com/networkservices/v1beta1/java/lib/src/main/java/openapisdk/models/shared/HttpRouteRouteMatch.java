package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteRouteMatch
 * RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
**/
public class HttpRouteRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullPathMatch")
    public String fullPathMatch;
    public HttpRouteRouteMatch withFullPathMatch(String fullPathMatch) {
        this.fullPathMatch = fullPathMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public HttpRouteHeaderMatch[] headers;
    public HttpRouteRouteMatch withHeaders(HttpRouteHeaderMatch[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreCase")
    public Boolean ignoreCase;
    public HttpRouteRouteMatch withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixMatch")
    public String prefixMatch;
    public HttpRouteRouteMatch withPrefixMatch(String prefixMatch) {
        this.prefixMatch = prefixMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public HttpRouteQueryParameterMatch[] queryParameters;
    public HttpRouteRouteMatch withQueryParameters(HttpRouteQueryParameterMatch[] queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexMatch")
    public String regexMatch;
    public HttpRouteRouteMatch withRegexMatch(String regexMatch) {
        this.regexMatch = regexMatch;
        return this;
    }
}