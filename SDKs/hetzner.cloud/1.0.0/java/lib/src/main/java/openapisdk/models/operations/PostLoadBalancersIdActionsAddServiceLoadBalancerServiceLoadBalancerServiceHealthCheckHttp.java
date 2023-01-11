package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
 * Additional configuration for protocol http
**/
public class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp {
    @JsonProperty("domain")
    public String domain;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_codes")
    public String[] statusCodes;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withStatusCodes(String[] statusCodes) {
        this.statusCodes = statusCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls")
    public Boolean tls;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withTls(Boolean tls) {
        this.tls = tls;
        return this;
    }
}