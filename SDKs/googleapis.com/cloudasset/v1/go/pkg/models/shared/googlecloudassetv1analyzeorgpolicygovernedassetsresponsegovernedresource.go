package shared

// GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource
// The Google Cloud resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
type GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource struct {
	Folders          []string `json:"folders,omitempty"`
	FullResourceName *string  `json:"fullResourceName,omitempty"`
	Organization     *string  `json:"organization,omitempty"`
	Parent           *string  `json:"parent,omitempty"`
	Project          *string  `json:"project,omitempty"`
}
