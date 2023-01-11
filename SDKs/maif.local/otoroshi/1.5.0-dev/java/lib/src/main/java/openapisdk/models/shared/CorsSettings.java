package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CorsSettings
 * The configuration for cors support
**/
public class CorsSettings {
    @JsonProperty("allowCredentials")
    public Boolean allowCredentials;
    public CorsSettings withAllowCredentials(Boolean allowCredentials) {
        this.allowCredentials = allowCredentials;
        return this;
    }
    @JsonProperty("allowHeaders")
    public String[] allowHeaders;
    public CorsSettings withAllowHeaders(String[] allowHeaders) {
        this.allowHeaders = allowHeaders;
        return this;
    }
    @JsonProperty("allowMethods")
    public String[] allowMethods;
    public CorsSettings withAllowMethods(String[] allowMethods) {
        this.allowMethods = allowMethods;
        return this;
    }
    @JsonProperty("allowOrigin")
    public String allowOrigin;
    public CorsSettings withAllowOrigin(String allowOrigin) {
        this.allowOrigin = allowOrigin;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public CorsSettings withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("excludedPatterns")
    public String[] excludedPatterns;
    public CorsSettings withExcludedPatterns(String[] excludedPatterns) {
        this.excludedPatterns = excludedPatterns;
        return this;
    }
    @JsonProperty("exposeHeaders")
    public String[] exposeHeaders;
    public CorsSettings withExposeHeaders(String[] exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonProperty("maxAge")
    public Integer maxAge;
    public CorsSettings withMaxAge(Integer maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}