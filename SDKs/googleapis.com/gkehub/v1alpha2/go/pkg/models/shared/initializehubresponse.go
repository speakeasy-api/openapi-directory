// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// InitializeHubResponse - Response message for the InitializeHub method.
type InitializeHubResponse struct {
	// Name of the Hub default service identity, in the format: service-@gcp-sa-gkehub.iam.gserviceaccount.com The service account has `roles/gkehub.serviceAgent` in the Hub project.
	ServiceIdentity *string `json:"serviceIdentity,omitempty"`
	// The Workload Identity Pool used for Workload Identity-enabled clusters registered with this Hub. Format: `.hub.id.goog`
	WorkloadIdentityPool *string `json:"workloadIdentityPool,omitempty"`
}
