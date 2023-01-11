package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpCookieEvidence
 * Evidence for HTTP cookie-related policy violations.
**/
public class HttpCookieEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookieNames")
    public String[] cookieNames;
    public HttpCookieEvidence withCookieNames(String[] cookieNames) {
        this.cookieNames = cookieNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCookieCount")
    public Integer maxCookieCount;
    public HttpCookieEvidence withMaxCookieCount(Integer maxCookieCount) {
        this.maxCookieCount = maxCookieCount;
        return this;
    }
}