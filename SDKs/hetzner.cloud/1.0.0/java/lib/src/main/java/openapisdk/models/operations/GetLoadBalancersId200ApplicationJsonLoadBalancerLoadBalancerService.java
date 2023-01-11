package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService {
    @JsonProperty("destination_port")
    public Long destinationPort;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withDestinationPort(Long destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("health_check")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withHealthCheck(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp http;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withHttp(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("listen_port")
    public Long listenPort;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonProperty("protocol")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum protocol;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withProtocol(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("proxyprotocol")
    public Boolean proxyprotocol;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withProxyprotocol(Boolean proxyprotocol) {
        this.proxyprotocol = proxyprotocol;
        return this;
    }
}