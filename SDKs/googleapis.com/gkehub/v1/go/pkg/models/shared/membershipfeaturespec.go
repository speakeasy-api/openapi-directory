package shared

type MembershipFeatureSpec struct {
	Configmanagement   *ConfigManagementMembershipSpec `json:"configmanagement,omitempty"`
	FleetInherited     *bool                           `json:"fleetInherited,omitempty"`
	Fleetobservability map[string]interface{}          `json:"fleetobservability,omitempty"`
	Identityservice    *IdentityServiceMembershipSpec  `json:"identityservice,omitempty"`
	Mesh               *ServiceMeshMembershipSpec      `json:"mesh,omitempty"`
}

type MembershipFeatureSpecInput struct {
	Configmanagement   *ConfigManagementMembershipSpec     `json:"configmanagement,omitempty"`
	FleetInherited     *bool                               `json:"fleetInherited,omitempty"`
	Fleetobservability map[string]interface{}              `json:"fleetobservability,omitempty"`
	Identityservice    *IdentityServiceMembershipSpecInput `json:"identityservice,omitempty"`
	Mesh               *ServiceMeshMembershipSpec          `json:"mesh,omitempty"`
}
