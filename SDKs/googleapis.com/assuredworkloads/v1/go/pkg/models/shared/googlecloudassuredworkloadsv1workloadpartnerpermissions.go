package shared

// GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions
// Permissions granted to the AW Partner SA account for the customer workload
type GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions struct {
	DataLogsViewer            *bool `json:"dataLogsViewer,omitempty"`
	RemediateFolderViolations *bool `json:"remediateFolderViolations,omitempty"`
	ServiceAccessApprover     *bool `json:"serviceAccessApprover,omitempty"`
}
