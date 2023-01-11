package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
 * Additional configuration for protocol http
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp {
    @JsonProperty("domain")
    public String domain;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_codes")
    public String[] statusCodes;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withStatusCodes(String[] statusCodes) {
        this.statusCodes = statusCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls")
    public Boolean tls;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp withTls(Boolean tls) {
        this.tls = tls;
        return this;
    }
}