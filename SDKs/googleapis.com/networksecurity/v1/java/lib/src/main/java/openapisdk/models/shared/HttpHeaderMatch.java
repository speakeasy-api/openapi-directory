package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpHeaderMatch
 * Specification of HTTP header match attributes.
**/
public class HttpHeaderMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerName")
    public String headerName;
    public HttpHeaderMatch withHeaderName(String headerName) {
        this.headerName = headerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexMatch")
    public String regexMatch;
    public HttpHeaderMatch withRegexMatch(String regexMatch) {
        this.regexMatch = regexMatch;
        return this;
    }
}