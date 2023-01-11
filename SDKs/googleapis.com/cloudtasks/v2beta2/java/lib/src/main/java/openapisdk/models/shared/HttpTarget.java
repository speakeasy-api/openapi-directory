package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpTarget
 * HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
**/
public class HttpTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerOverrides")
    public HeaderOverride[] headerOverrides;
    public HttpTarget withHeaderOverrides(HeaderOverride[] headerOverrides) {
        this.headerOverrides = headerOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpMethod")
    public HttpTargetHttpMethodEnum httpMethod;
    public HttpTarget withHttpMethod(HttpTargetHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthToken")
    public OAuthToken oauthToken;
    public HttpTarget withOauthToken(OAuthToken oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidcToken")
    public OidcToken oidcToken;
    public HttpTarget withOidcToken(OidcToken oidcToken) {
        this.oidcToken = oidcToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uriOverride")
    public UriOverride uriOverride;
    public HttpTarget withUriOverride(UriOverride uriOverride) {
        this.uriOverride = uriOverride;
        return this;
    }
}