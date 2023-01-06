package shared

type MembershipFeatureState struct {
	Appdevexperience   *AppDevExperienceFeatureState    `json:"appdevexperience,omitempty"`
	Configmanagement   *ConfigManagementMembershipState `json:"configmanagement,omitempty"`
	Fleetobservability map[string]interface{}           `json:"fleetobservability,omitempty"`
	Identityservice    *IdentityServiceMembershipState  `json:"identityservice,omitempty"`
	Servicemesh        *ServiceMeshMembershipState      `json:"servicemesh,omitempty"`
	State              *FeatureState                    `json:"state,omitempty"`
}
