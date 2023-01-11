package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteCorsPolicy
 * The Specification for allowing client side cross-origin requests.
**/
public class HttpRouteCorsPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowCredentials")
    public Boolean allowCredentials;
    public HttpRouteCorsPolicy withAllowCredentials(Boolean allowCredentials) {
        this.allowCredentials = allowCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowHeaders")
    public String[] allowHeaders;
    public HttpRouteCorsPolicy withAllowHeaders(String[] allowHeaders) {
        this.allowHeaders = allowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMethods")
    public String[] allowMethods;
    public HttpRouteCorsPolicy withAllowMethods(String[] allowMethods) {
        this.allowMethods = allowMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOriginRegexes")
    public String[] allowOriginRegexes;
    public HttpRouteCorsPolicy withAllowOriginRegexes(String[] allowOriginRegexes) {
        this.allowOriginRegexes = allowOriginRegexes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOrigins")
    public String[] allowOrigins;
    public HttpRouteCorsPolicy withAllowOrigins(String[] allowOrigins) {
        this.allowOrigins = allowOrigins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public HttpRouteCorsPolicy withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exposeHeaders")
    public String[] exposeHeaders;
    public HttpRouteCorsPolicy withExposeHeaders(String[] exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAge")
    public String maxAge;
    public HttpRouteCorsPolicy withMaxAge(String maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}