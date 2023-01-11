package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpCallEvidence
 * HTTP calls made by a creative that resulted in policy violations.
**/
public class HttpCallEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public String[] urls;
    public HttpCallEvidence withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}