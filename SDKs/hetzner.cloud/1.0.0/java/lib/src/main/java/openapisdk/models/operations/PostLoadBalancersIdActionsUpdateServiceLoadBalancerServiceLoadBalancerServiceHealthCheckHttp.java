package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
 * Additional configuration for protocol http
**/
public class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp {
    @JsonProperty("domain")
    public String domain;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_codes")
    public String[] statusCodes;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withStatusCodes(String[] statusCodes) {
        this.statusCodes = statusCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls")
    public Boolean tls;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withTls(Boolean tls) {
        this.tls = tls;
        return this;
    }
}