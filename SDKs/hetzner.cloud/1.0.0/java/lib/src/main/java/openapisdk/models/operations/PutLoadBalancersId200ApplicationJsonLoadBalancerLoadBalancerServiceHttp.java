package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp
 * Configuration option for protocols http and https
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public Long[] certificates;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp withCertificates(Long[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonProperty("cookie_lifetime")
    public Long cookieLifetime;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp withCookieLifetime(Long cookieLifetime) {
        this.cookieLifetime = cookieLifetime;
        return this;
    }
    @JsonProperty("cookie_name")
    public String cookieName;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http")
    public Boolean redirectHttp;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp withRedirectHttp(Boolean redirectHttp) {
        this.redirectHttp = redirectHttp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public Boolean stickySessions;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp withStickySessions(Boolean stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
}