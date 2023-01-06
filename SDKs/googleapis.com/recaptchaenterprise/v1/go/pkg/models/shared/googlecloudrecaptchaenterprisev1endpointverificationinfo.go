package shared

// GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput
// Information about a verification endpoint that can be used for 2FA.
type GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput struct {
	EmailAddress *string `json:"emailAddress,omitempty"`
	PhoneNumber  *string `json:"phoneNumber,omitempty"`
}

// GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo
// Information about a verification endpoint that can be used for 2FA.
type GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo struct {
	EmailAddress         *string `json:"emailAddress,omitempty"`
	LastVerificationTime *string `json:"lastVerificationTime,omitempty"`
	PhoneNumber          *string `json:"phoneNumber,omitempty"`
	RequestToken         *string `json:"requestToken,omitempty"`
}
