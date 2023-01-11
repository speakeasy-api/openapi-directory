package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRequest
 * HTTP request. The task will be pushed to the worker as an HTTP request. An HTTP request embodies a url, an http method, headers, body and authorization for the http task.
**/
public class HttpRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public HttpRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public HttpRequest withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpMethod")
    public HttpRequestHttpMethodEnum httpMethod;
    public HttpRequest withHttpMethod(HttpRequestHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthToken")
    public OAuthToken oauthToken;
    public HttpRequest withOauthToken(OAuthToken oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidcToken")
    public OidcToken oidcToken;
    public HttpRequest withOidcToken(OidcToken oidcToken) {
        this.oidcToken = oidcToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public HttpRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}