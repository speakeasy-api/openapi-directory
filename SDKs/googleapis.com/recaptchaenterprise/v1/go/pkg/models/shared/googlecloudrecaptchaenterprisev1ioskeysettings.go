// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudRecaptchaenterpriseV1IOSKeySettings - Settings specific to keys that can be used by iOS apps.
type GoogleCloudRecaptchaenterpriseV1IOSKeySettings struct {
	// If set to true, allowed_bundle_ids are not enforced.
	AllowAllBundleIds *bool `json:"allowAllBundleIds,omitempty"`
	// iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
	AllowedBundleIds []string `json:"allowedBundleIds,omitempty"`
}
