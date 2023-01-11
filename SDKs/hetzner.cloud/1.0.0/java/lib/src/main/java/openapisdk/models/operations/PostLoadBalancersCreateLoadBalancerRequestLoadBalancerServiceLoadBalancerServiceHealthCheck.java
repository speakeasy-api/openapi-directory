package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck
 * Service health check
**/
public class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck withHttp(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("interval")
    public Long interval;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck withProtocol(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("retries")
    public Long retries;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck withRetries(Long retries) {
        this.retries = retries;
        return this;
    }
    @JsonProperty("timeout")
    public Long timeout;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}