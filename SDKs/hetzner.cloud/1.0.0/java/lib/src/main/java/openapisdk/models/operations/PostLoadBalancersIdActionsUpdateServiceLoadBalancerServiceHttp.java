package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp
 * Configuration option for protocols http and https
**/
public class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public Long[] certificates;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp withCertificates(Long[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonProperty("cookie_lifetime")
    public Long cookieLifetime;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp withCookieLifetime(Long cookieLifetime) {
        this.cookieLifetime = cookieLifetime;
        return this;
    }
    @JsonProperty("cookie_name")
    public String cookieName;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http")
    public Boolean redirectHttp;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp withRedirectHttp(Boolean redirectHttp) {
        this.redirectHttp = redirectHttp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public Boolean stickySessions;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp withStickySessions(Boolean stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
}