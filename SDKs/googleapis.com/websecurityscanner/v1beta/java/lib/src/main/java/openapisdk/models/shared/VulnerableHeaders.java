package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VulnerableHeaders
 * Information about vulnerable or missing HTTP Headers.
**/
public class VulnerableHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Header[] headers;
    public VulnerableHeaders withHeaders(Header[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missingHeaders")
    public Header[] missingHeaders;
    public VulnerableHeaders withMissingHeaders(Header[] missingHeaders) {
        this.missingHeaders = missingHeaders;
        return this;
    }
}