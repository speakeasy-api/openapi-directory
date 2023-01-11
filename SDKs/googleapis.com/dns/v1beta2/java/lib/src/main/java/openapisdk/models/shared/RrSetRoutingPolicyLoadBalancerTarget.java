package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RrSetRoutingPolicyLoadBalancerTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public RrSetRoutingPolicyLoadBalancerTarget withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipProtocol")
    public RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum ipProtocol;
    public RrSetRoutingPolicyLoadBalancerTarget withIpProtocol(RrSetRoutingPolicyLoadBalancerTargetIpProtocolEnum ipProtocol) {
        this.ipProtocol = ipProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RrSetRoutingPolicyLoadBalancerTarget withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancerType")
    public RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum loadBalancerType;
    public RrSetRoutingPolicyLoadBalancerTarget withLoadBalancerType(RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum loadBalancerType) {
        this.loadBalancerType = loadBalancerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUrl")
    public String networkUrl;
    public RrSetRoutingPolicyLoadBalancerTarget withNetworkUrl(String networkUrl) {
        this.networkUrl = networkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public RrSetRoutingPolicyLoadBalancerTarget withPort(String port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public RrSetRoutingPolicyLoadBalancerTarget withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public RrSetRoutingPolicyLoadBalancerTarget withRegion(String region) {
        this.region = region;
        return this;
    }
}