package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService {
    @JsonProperty("destination_port")
    public Long destinationPort;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService withDestinationPort(Long destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("health_check")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService withHealthCheck(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp http;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService withHttp(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("listen_port")
    public Long listenPort;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonProperty("protocol")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum protocol;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService withProtocol(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("proxyprotocol")
    public Boolean proxyprotocol;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService withProxyprotocol(Boolean proxyprotocol) {
        this.proxyprotocol = proxyprotocol;
        return this;
    }
}