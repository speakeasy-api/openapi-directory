package shared

type NodeGroupRolesEnum string

const (
	NodeGroupRolesEnumRoleUnspecified NodeGroupRolesEnum = "ROLE_UNSPECIFIED"
	NodeGroupRolesEnumDriver          NodeGroupRolesEnum = "DRIVER"
)

// NodeGroup
// Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.
type NodeGroup struct {
	Labels          map[string]string    `json:"labels,omitempty"`
	Name            *string              `json:"name,omitempty"`
	NodeGroupConfig *InstanceGroupConfig `json:"nodeGroupConfig,omitempty"`
	Roles           []NodeGroupRolesEnum `json:"roles,omitempty"`
}

// NodeGroupInput
// Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.
type NodeGroupInput struct {
	Labels          map[string]string         `json:"labels,omitempty"`
	Name            *string                   `json:"name,omitempty"`
	NodeGroupConfig *InstanceGroupConfigInput `json:"nodeGroupConfig,omitempty"`
	Roles           []NodeGroupRolesEnum      `json:"roles,omitempty"`
}
