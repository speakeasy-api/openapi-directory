package shared

// V1Beta1ListProducerOverridesResponse
// Response message for ListProducerOverrides.
type V1Beta1ListProducerOverridesResponse struct {
	NextPageToken *string                `json:"nextPageToken,omitempty"`
	Overrides     []V1Beta1QuotaOverride `json:"overrides,omitempty"`
}
