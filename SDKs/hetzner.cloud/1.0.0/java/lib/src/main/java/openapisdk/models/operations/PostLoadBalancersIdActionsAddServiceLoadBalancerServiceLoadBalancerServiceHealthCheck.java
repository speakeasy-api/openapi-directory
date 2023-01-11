package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
 * Service health check
**/
public class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withHttp(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("interval")
    public Long interval;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withProtocol(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("retries")
    public Long retries;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withRetries(Long retries) {
        this.retries = retries;
        return this;
    }
    @JsonProperty("timeout")
    public Long timeout;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}