package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslCertsListResponse
 * SslCerts list response.
**/
public class SslCertsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public SslCert[] items;
    public SslCertsListResponse withItems(SslCert[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SslCertsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}