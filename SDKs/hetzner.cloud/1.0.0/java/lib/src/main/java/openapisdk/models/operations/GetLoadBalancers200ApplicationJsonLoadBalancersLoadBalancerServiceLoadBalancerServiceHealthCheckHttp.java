package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
 * Additional configuration for protocol http
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp {
    @JsonProperty("domain")
    public String domain;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_codes")
    public String[] statusCodes;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withStatusCodes(String[] statusCodes) {
        this.statusCodes = statusCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls")
    public Boolean tls;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withTls(Boolean tls) {
        this.tls = tls;
        return this;
    }
}