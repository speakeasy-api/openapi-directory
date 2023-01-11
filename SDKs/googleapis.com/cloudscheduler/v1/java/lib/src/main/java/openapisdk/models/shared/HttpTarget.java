package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpTarget
 * Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.
**/
public class HttpTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public HttpTarget withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public HttpTarget withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
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
    @JsonProperty("uri")
    public String uri;
    public HttpTarget withUri(String uri) {
        this.uri = uri;
        return this;
    }
}