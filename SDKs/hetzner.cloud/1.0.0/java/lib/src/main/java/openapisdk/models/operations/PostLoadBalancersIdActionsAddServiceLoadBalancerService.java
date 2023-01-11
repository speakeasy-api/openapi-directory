package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersIdActionsAddServiceLoadBalancerService {
    @JsonProperty("destination_port")
    public Long destinationPort;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerService withDestinationPort(Long destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("health_check")
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerService withHealthCheck(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp http;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerService withHttp(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("listen_port")
    public Long listenPort;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerService withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonProperty("protocol")
    public PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum protocol;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerService withProtocol(PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("proxyprotocol")
    public Boolean proxyprotocol;
    public PostLoadBalancersIdActionsAddServiceLoadBalancerService withProxyprotocol(Boolean proxyprotocol) {
        this.proxyprotocol = proxyprotocol;
        return this;
    }
}