package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService {
    @JsonProperty("destination_port")
    public Long destinationPort;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService withDestinationPort(Long destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("health_check")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService withHealthCheck(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp http;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService withHttp(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("listen_port")
    public Long listenPort;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonProperty("protocol")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum protocol;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService withProtocol(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("proxyprotocol")
    public Boolean proxyprotocol;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService withProxyprotocol(Boolean proxyprotocol) {
        this.proxyprotocol = proxyprotocol;
        return this;
    }
}