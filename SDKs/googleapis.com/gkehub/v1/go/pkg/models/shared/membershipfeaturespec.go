package shared

// MembershipFeatureSpec
// MembershipFeatureSpec contains configuration information for a single Membership.
type MembershipFeatureSpec struct {
	Configmanagement   *ConfigManagementMembershipSpec `json:"configmanagement,omitempty"`
	FleetInherited     *bool                           `json:"fleetInherited,omitempty"`
	Fleetobservability map[string]interface{}          `json:"fleetobservability,omitempty"`
	Identityservice    *IdentityServiceMembershipSpec  `json:"identityservice,omitempty"`
	Mesh               *ServiceMeshMembershipSpec      `json:"mesh,omitempty"`
}

// MembershipFeatureSpecInput
// MembershipFeatureSpec contains configuration information for a single Membership.
type MembershipFeatureSpecInput struct {
	Configmanagement   *ConfigManagementMembershipSpec     `json:"configmanagement,omitempty"`
	FleetInherited     *bool                               `json:"fleetInherited,omitempty"`
	Fleetobservability map[string]interface{}              `json:"fleetobservability,omitempty"`
	Identityservice    *IdentityServiceMembershipSpecInput `json:"identityservice,omitempty"`
	Mesh               *ServiceMeshMembershipSpec          `json:"mesh,omitempty"`
}
