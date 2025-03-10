// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// StepStateEnum - Each step is in one of the pre-defined states.
type StepStateEnum string

const (
	StepStateEnumStateUnspecified             StepStateEnum = "STATE_UNSPECIFIED"
	StepStateEnumStartFromInstance            StepStateEnum = "START_FROM_INSTANCE"
	StepStateEnumStartFromInternet            StepStateEnum = "START_FROM_INTERNET"
	StepStateEnumStartFromPrivateNetwork      StepStateEnum = "START_FROM_PRIVATE_NETWORK"
	StepStateEnumStartFromGkeMaster           StepStateEnum = "START_FROM_GKE_MASTER"
	StepStateEnumStartFromCloudSQLInstance    StepStateEnum = "START_FROM_CLOUD_SQL_INSTANCE"
	StepStateEnumStartFromCloudFunction       StepStateEnum = "START_FROM_CLOUD_FUNCTION"
	StepStateEnumStartFromAppEngineVersion    StepStateEnum = "START_FROM_APP_ENGINE_VERSION"
	StepStateEnumStartFromCloudRunRevision    StepStateEnum = "START_FROM_CLOUD_RUN_REVISION"
	StepStateEnumApplyIngressFirewallRule     StepStateEnum = "APPLY_INGRESS_FIREWALL_RULE"
	StepStateEnumApplyEgressFirewallRule      StepStateEnum = "APPLY_EGRESS_FIREWALL_RULE"
	StepStateEnumApplyRoute                   StepStateEnum = "APPLY_ROUTE"
	StepStateEnumApplyForwardingRule          StepStateEnum = "APPLY_FORWARDING_RULE"
	StepStateEnumSpoofingApproved             StepStateEnum = "SPOOFING_APPROVED"
	StepStateEnumArriveAtInstance             StepStateEnum = "ARRIVE_AT_INSTANCE"
	StepStateEnumArriveAtInternalLoadBalancer StepStateEnum = "ARRIVE_AT_INTERNAL_LOAD_BALANCER"
	StepStateEnumArriveAtExternalLoadBalancer StepStateEnum = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER"
	StepStateEnumArriveAtVpnGateway           StepStateEnum = "ARRIVE_AT_VPN_GATEWAY"
	StepStateEnumArriveAtVpnTunnel            StepStateEnum = "ARRIVE_AT_VPN_TUNNEL"
	StepStateEnumArriveAtVpcConnector         StepStateEnum = "ARRIVE_AT_VPC_CONNECTOR"
	StepStateEnumNat                          StepStateEnum = "NAT"
	StepStateEnumProxyConnection              StepStateEnum = "PROXY_CONNECTION"
	StepStateEnumDeliver                      StepStateEnum = "DELIVER"
	StepStateEnumDrop                         StepStateEnum = "DROP"
	StepStateEnumForward                      StepStateEnum = "FORWARD"
	StepStateEnumAbort                        StepStateEnum = "ABORT"
	StepStateEnumViewerPermissionMissing      StepStateEnum = "VIEWER_PERMISSION_MISSING"
)

func (e StepStateEnum) ToPointer() *StepStateEnum {
	return &e
}

func (e *StepStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STATE_UNSPECIFIED":
		fallthrough
	case "START_FROM_INSTANCE":
		fallthrough
	case "START_FROM_INTERNET":
		fallthrough
	case "START_FROM_PRIVATE_NETWORK":
		fallthrough
	case "START_FROM_GKE_MASTER":
		fallthrough
	case "START_FROM_CLOUD_SQL_INSTANCE":
		fallthrough
	case "START_FROM_CLOUD_FUNCTION":
		fallthrough
	case "START_FROM_APP_ENGINE_VERSION":
		fallthrough
	case "START_FROM_CLOUD_RUN_REVISION":
		fallthrough
	case "APPLY_INGRESS_FIREWALL_RULE":
		fallthrough
	case "APPLY_EGRESS_FIREWALL_RULE":
		fallthrough
	case "APPLY_ROUTE":
		fallthrough
	case "APPLY_FORWARDING_RULE":
		fallthrough
	case "SPOOFING_APPROVED":
		fallthrough
	case "ARRIVE_AT_INSTANCE":
		fallthrough
	case "ARRIVE_AT_INTERNAL_LOAD_BALANCER":
		fallthrough
	case "ARRIVE_AT_EXTERNAL_LOAD_BALANCER":
		fallthrough
	case "ARRIVE_AT_VPN_GATEWAY":
		fallthrough
	case "ARRIVE_AT_VPN_TUNNEL":
		fallthrough
	case "ARRIVE_AT_VPC_CONNECTOR":
		fallthrough
	case "NAT":
		fallthrough
	case "PROXY_CONNECTION":
		fallthrough
	case "DELIVER":
		fallthrough
	case "DROP":
		fallthrough
	case "FORWARD":
		fallthrough
	case "ABORT":
		fallthrough
	case "VIEWER_PERMISSION_MISSING":
		*e = StepStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StepStateEnum: %v", v)
	}
}

// Step - A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
type Step struct {
	// Details of the final state "abort" and associated resource.
	Abort *AbortInfo `json:"abort,omitempty"`
	// For display only. Metadata associated with an App Engine version.
	AppEngineVersion *AppEngineVersionInfo `json:"appEngineVersion,omitempty"`
	// This is a step that leads to the final state Drop.
	CausesDrop *bool `json:"causesDrop,omitempty"`
	// For display only. Metadata associated with a Cloud Function.
	CloudFunction *CloudFunctionInfo `json:"cloudFunction,omitempty"`
	// For display only. Metadata associated with a Cloud Run revision.
	CloudRunRevision *CloudRunRevisionInfo `json:"cloudRunRevision,omitempty"`
	// For display only. Metadata associated with a Cloud SQL instance.
	CloudSQLInstance *CloudSQLInstanceInfo `json:"cloudSqlInstance,omitempty"`
	// Details of the final state "deliver" and associated resource.
	Deliver *DeliverInfo `json:"deliver,omitempty"`
	// A description of the step. Usually this is a summary of the state.
	Description *string `json:"description,omitempty"`
	// Details of the final state "drop" and associated resource.
	Drop *DropInfo `json:"drop,omitempty"`
	// For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
	Endpoint *EndpointInfo `json:"endpoint,omitempty"`
	// For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
	Firewall *FirewallInfo `json:"firewall,omitempty"`
	// Details of the final state "forward" and associated resource.
	Forward *ForwardInfo `json:"forward,omitempty"`
	// For display only. Metadata associated with a Compute Engine forwarding rule.
	ForwardingRule *ForwardingRuleInfo `json:"forwardingRule,omitempty"`
	// For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
	GkeMaster *GKEMasterInfo `json:"gkeMaster,omitempty"`
	// For display only. Metadata associated with a Compute Engine instance.
	Instance *InstanceInfo `json:"instance,omitempty"`
	// For display only. Metadata associated with a load balancer.
	LoadBalancer *LoadBalancerInfo `json:"loadBalancer,omitempty"`
	// For display only. Metadata associated with a Compute Engine network.
	Network *NetworkInfo `json:"network,omitempty"`
	// Project ID that contains the configuration this step is validating.
	ProjectID *string `json:"projectId,omitempty"`
	// For display only. Metadata associated with a Compute Engine route.
	Route *RouteInfo `json:"route,omitempty"`
	// Each step is in one of the pre-defined states.
	State *StepStateEnum `json:"state,omitempty"`
	// For display only. Metadata associated with a VPC connector.
	VpcConnector *VpcConnectorInfo `json:"vpcConnector,omitempty"`
	// For display only. Metadata associated with a Compute Engine VPN gateway.
	VpnGateway *VpnGatewayInfo `json:"vpnGateway,omitempty"`
	// For display only. Metadata associated with a Compute Engine VPN tunnel.
	VpnTunnel *VpnTunnelInfo `json:"vpnTunnel,omitempty"`
}
