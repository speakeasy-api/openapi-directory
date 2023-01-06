package shared

type RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum string

const (
	RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "UNDEFINED"
	RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "TCP"
	RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "UDP"
)

type RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum string

const (
	RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone          RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "NONE"
	RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "REGIONAL_L4ILB"
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
