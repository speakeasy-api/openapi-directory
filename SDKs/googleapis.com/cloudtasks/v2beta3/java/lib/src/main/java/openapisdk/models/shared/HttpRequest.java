package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRequest
 * HTTP request. The task will be pushed to the worker as an HTTP request. If the worker or the redirected worker acknowledges the task by returning a successful HTTP response code ([`200` - `299`]), the task will be removed from the queue. If any other HTTP response code is returned or no response is received, the task will be retried according to the following: * User-specified throttling: retry configuration, rate limits, and the queue's state. * System throttling: To prevent the worker from overloading, Cloud Tasks may temporarily reduce the queue's effective rate. User-specified settings will not be changed. System throttling happens because: * Cloud Tasks backs off on all errors. Normally the backoff specified in rate limits will be used. But if the worker returns `429` (Too Many Requests), `503` (Service Unavailable), or the rate of errors is high, Cloud Tasks will use a higher backoff rate. The retry specified in the `Retry-After` HTTP response header is considered. * To prevent traffic spikes and to smooth sudden increases in traffic, dispatches ramp up slowly when the queue is newly created or idle and if large numbers of tasks suddenly become available to dispatch (due to spikes in create task rates, the queue being unpaused, or many tasks that are scheduled at the same time).
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