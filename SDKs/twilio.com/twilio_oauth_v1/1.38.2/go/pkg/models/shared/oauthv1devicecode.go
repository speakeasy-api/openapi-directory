package shared

type OauthV1DeviceCode struct {
	DeviceCode              *string `json:"device_code,omitempty"`
	ExpiresIn               *int64  `json:"expires_in,omitempty"`
	Interval                *int64  `json:"interval,omitempty"`
	UserCode                *string `json:"user_code,omitempty"`
	VerificationURI         *string `json:"verification_uri,omitempty"`
	VerificationURIComplete *string `json:"verification_uri_complete,omitempty"`
}
