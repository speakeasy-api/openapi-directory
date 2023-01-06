package shared

// GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest
// Request of updating permission settings for a partner workload.
type GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest struct {
	Etag               *string                                                  `json:"etag,omitempty"`
	PartnerPermissions *GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions `json:"partnerPermissions,omitempty"`
	UpdateMask         *string                                                  `json:"updateMask,omitempty"`
}
