package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService {
    @JsonProperty("destination_port")
    public Long destinationPort;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withDestinationPort(Long destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("health_check")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withHealthCheck(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp http;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withHttp(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("listen_port")
    public Long listenPort;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonProperty("protocol")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum protocol;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withProtocol(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("proxyprotocol")
    public Boolean proxyprotocol;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService withProxyprotocol(Boolean proxyprotocol) {
        this.proxyprotocol = proxyprotocol;
        return this;
    }
}