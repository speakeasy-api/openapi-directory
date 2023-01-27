package shared

// GoogleCloudOrgpolicyV2Policy
// Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
type GoogleCloudOrgpolicyV2Policy struct {
	Alternate  *GoogleCloudOrgpolicyV2AlternatePolicySpec `json:"alternate,omitempty"`
	DryRunSpec *GoogleCloudOrgpolicyV2PolicySpec          `json:"dryRunSpec,omitempty"`
	Name       *string                                    `json:"name,omitempty"`
	Spec       *GoogleCloudOrgpolicyV2PolicySpec          `json:"spec,omitempty"`
}

// GoogleCloudOrgpolicyV2PolicyInput
// Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
type GoogleCloudOrgpolicyV2PolicyInput struct {
	Alternate  *GoogleCloudOrgpolicyV2AlternatePolicySpecInput `json:"alternate,omitempty"`
	DryRunSpec *GoogleCloudOrgpolicyV2PolicySpecInput          `json:"dryRunSpec,omitempty"`
	Name       *string                                         `json:"name,omitempty"`
	Spec       *GoogleCloudOrgpolicyV2PolicySpecInput          `json:"spec,omitempty"`
}
