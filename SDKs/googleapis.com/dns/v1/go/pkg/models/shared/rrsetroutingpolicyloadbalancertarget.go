package shared

type RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum string

const (
	RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "undefined"
	RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "tcp"
	RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "udp"
)

type RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum string

const (
	RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone          RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "none"
	RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "regionalL4ilb"
)

type RrSetRoutingPolicyLoadBalancerTarget struct {
	IPAddress        *string                                                   `json:"ipAddress,omitempty"`
	IPProtocol       *RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum       `json:"ipProtocol,omitempty"`
	Kind             *string                                                   `json:"kind,omitempty"`
	LoadBalancerType *RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum `json:"loadBalancerType,omitempty"`
	NetworkURL       *string                                                   `json:"networkUrl,omitempty"`
	Port             *string                                                   `json:"port,omitempty"`
	Project          *string                                                   `json:"project,omitempty"`
	Region           *string                                                   `json:"region,omitempty"`
}
