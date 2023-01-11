package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService {
    @JsonProperty("destination_port")
    public Long destinationPort;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService withDestinationPort(Long destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("health_check")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService withHealthCheck(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp http;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService withHttp(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("listen_port")
    public Long listenPort;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonProperty("protocol")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum protocol;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService withProtocol(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("proxyprotocol")
    public Boolean proxyprotocol;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService withProxyprotocol(Boolean proxyprotocol) {
        this.proxyprotocol = proxyprotocol;
        return this;
    }
}