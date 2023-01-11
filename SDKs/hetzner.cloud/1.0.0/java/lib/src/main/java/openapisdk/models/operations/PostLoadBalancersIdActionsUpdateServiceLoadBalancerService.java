package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersIdActionsUpdateServiceLoadBalancerService {
    @JsonProperty("destination_port")
    public Long destinationPort;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerService withDestinationPort(Long destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonProperty("health_check")
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerService withHealthCheck(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp http;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerService withHttp(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("listen_port")
    public Long listenPort;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerService withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonProperty("protocol")
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum protocol;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerService withProtocol(PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("proxyprotocol")
    public Boolean proxyprotocol;
    public PostLoadBalancersIdActionsUpdateServiceLoadBalancerService withProxyprotocol(Boolean proxyprotocol) {
        this.proxyprotocol = proxyprotocol;
        return this;
    }
}