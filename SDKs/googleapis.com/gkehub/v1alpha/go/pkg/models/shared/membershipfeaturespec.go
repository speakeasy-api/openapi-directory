package shared

type MembershipFeatureSpec struct {
	Anthosobservability *AnthosObservabilityMembershipSpec `json:"anthosobservability,omitempty"`
	Cloudbuild          *CloudBuildMembershipSpec          `json:"cloudbuild,omitempty"`
	Configmanagement    *ConfigManagementMembershipSpec    `json:"configmanagement,omitempty"`
	FleetInherited      *bool                              `json:"fleetInherited,omitempty"`
	Fleetobservability  map[string]interface{}             `json:"fleetobservability,omitempty"`
	Identityservice     *IdentityServiceMembershipSpec     `json:"identityservice,omitempty"`
	Mesh                *ServiceMeshMembershipSpec         `json:"mesh,omitempty"`
	Policycontroller    *PolicyControllerMembershipSpec    `json:"policycontroller,omitempty"`
	Workloadcertificate *MembershipSpec                    `json:"workloadcertificate,omitempty"`
}

type MembershipFeatureSpecInput struct {
	Anthosobservability *AnthosObservabilityMembershipSpec  `json:"anthosobservability,omitempty"`
	Cloudbuild          *CloudBuildMembershipSpec           `json:"cloudbuild,omitempty"`
	Configmanagement    *ConfigManagementMembershipSpec     `json:"configmanagement,omitempty"`
	FleetInherited      *bool                               `json:"fleetInherited,omitempty"`
	Fleetobservability  map[string]interface{}              `json:"fleetobservability,omitempty"`
	Identityservice     *IdentityServiceMembershipSpecInput `json:"identityservice,omitempty"`
	Mesh                *ServiceMeshMembershipSpec          `json:"mesh,omitempty"`
	Policycontroller    *PolicyControllerMembershipSpec     `json:"policycontroller,omitempty"`
	Workloadcertificate *MembershipSpec                     `json:"workloadcertificate,omitempty"`
}
