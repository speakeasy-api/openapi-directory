package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteQueryParameterMatch
 * Specifications to match a query parameter in the request.
**/
public class HttpRouteQueryParameterMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exactMatch")
    public String exactMatch;
    public HttpRouteQueryParameterMatch withExactMatch(String exactMatch) {
        this.exactMatch = exactMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentMatch")
    public Boolean presentMatch;
    public HttpRouteQueryParameterMatch withPresentMatch(Boolean presentMatch) {
        this.presentMatch = presentMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameter")
    public String queryParameter;
    public HttpRouteQueryParameterMatch withQueryParameter(String queryParameter) {
        this.queryParameter = queryParameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexMatch")
    public String regexMatch;
    public HttpRouteQueryParameterMatch withRegexMatch(String regexMatch) {
        this.regexMatch = regexMatch;
        return this;
    }
}