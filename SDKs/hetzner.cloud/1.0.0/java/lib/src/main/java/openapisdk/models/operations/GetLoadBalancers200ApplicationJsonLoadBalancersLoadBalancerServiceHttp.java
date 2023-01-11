package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp
 * Configuration option for protocols http and https
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public Long[] certificates;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp withCertificates(Long[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonProperty("cookie_lifetime")
    public Long cookieLifetime;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp withCookieLifetime(Long cookieLifetime) {
        this.cookieLifetime = cookieLifetime;
        return this;
    }
    @JsonProperty("cookie_name")
    public String cookieName;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http")
    public Boolean redirectHttp;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp withRedirectHttp(Boolean redirectHttp) {
        this.redirectHttp = redirectHttp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public Boolean stickySessions;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp withStickySessions(Boolean stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
}