package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
 * Service health check
**/
public class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withHttp(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("interval")
    public Long interval;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withProtocol(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("retries")
    public Long retries;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withRetries(Long retries) {
        this.retries = retries;
        return this;
    }
    @JsonProperty("timeout")
    public Long timeout;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}