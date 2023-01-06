package shared

type HubStateEnum string

const (
	HubStateEnumStateUnspecified HubStateEnum = "STATE_UNSPECIFIED"
	HubStateEnumCreating         HubStateEnum = "CREATING"
	HubStateEnumActive           HubStateEnum = "ACTIVE"
	HubStateEnumDeleting         HubStateEnum = "DELETING"
	HubStateEnumUpdating         HubStateEnum = "UPDATING"
)

// Hub
// A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.
type Hub struct {
	CreateTime  *string           `json:"createTime,omitempty"`
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	RoutingVpcs []RoutingVpc      `json:"routingVpcs,omitempty"`
	State       *HubStateEnum     `json:"state,omitempty"`
	UniqueID    *string           `json:"uniqueId,omitempty"`
	UpdateTime  *string           `json:"updateTime,omitempty"`
}

// HubInput
// A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project.
type HubInput struct {
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	RoutingVpcs []RoutingVpcInput `json:"routingVpcs,omitempty"`
}
