package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JwksAlgoSettings
 * Settings for a JWK set
**/
public class JwksAlgoSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public JwksAlgoSettings withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kty")
    public String kty;
    public JwksAlgoSettings withKty(String kty) {
        this.kty = kty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;
    public JwksAlgoSettings withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public JwksAlgoSettings withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public JwksAlgoSettings withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public JwksAlgoSettings withUrl(String url) {
        this.url = url;
        return this;
    }
}