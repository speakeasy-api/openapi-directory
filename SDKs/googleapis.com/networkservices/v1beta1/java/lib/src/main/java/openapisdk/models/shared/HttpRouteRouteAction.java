package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteRouteAction
 * The specifications for routing traffic and applying associated policies.
**/
public class HttpRouteRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corsPolicy")
    public HttpRouteCorsPolicy corsPolicy;
    public HttpRouteRouteAction withCorsPolicy(HttpRouteCorsPolicy corsPolicy) {
        this.corsPolicy = corsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public HttpRouteDestination[] destinations;
    public HttpRouteRouteAction withDestinations(HttpRouteDestination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faultInjectionPolicy")
    public HttpRouteFaultInjectionPolicy faultInjectionPolicy;
    public HttpRouteRouteAction withFaultInjectionPolicy(HttpRouteFaultInjectionPolicy faultInjectionPolicy) {
        this.faultInjectionPolicy = faultInjectionPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect")
    public HttpRouteRedirect redirect;
    public HttpRouteRouteAction withRedirect(HttpRouteRedirect redirect) {
        this.redirect = redirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestHeaderModifier")
    public HttpRouteHeaderModifier requestHeaderModifier;
    public HttpRouteRouteAction withRequestHeaderModifier(HttpRouteHeaderModifier requestHeaderModifier) {
        this.requestHeaderModifier = requestHeaderModifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMirrorPolicy")
    public HttpRouteRequestMirrorPolicy requestMirrorPolicy;
    public HttpRouteRouteAction withRequestMirrorPolicy(HttpRouteRequestMirrorPolicy requestMirrorPolicy) {
        this.requestMirrorPolicy = requestMirrorPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseHeaderModifier")
    public HttpRouteHeaderModifier responseHeaderModifier;
    public HttpRouteRouteAction withResponseHeaderModifier(HttpRouteHeaderModifier responseHeaderModifier) {
        this.responseHeaderModifier = responseHeaderModifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryPolicy")
    public HttpRouteRetryPolicy retryPolicy;
    public HttpRouteRouteAction withRetryPolicy(HttpRouteRetryPolicy retryPolicy) {
        this.retryPolicy = retryPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public HttpRouteRouteAction withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlRewrite")
    public HttpRouteUrlRewrite urlRewrite;
    public HttpRouteRouteAction withUrlRewrite(HttpRouteUrlRewrite urlRewrite) {
        this.urlRewrite = urlRewrite;
        return this;
    }
}