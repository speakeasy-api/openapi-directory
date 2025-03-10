// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleIdentityAccesscontextmanagerV1AccessLevel - An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
type GoogleIdentityAccesscontextmanagerV1AccessLevel struct {
	// `BasicLevel` is an `AccessLevel` using a set of recommended features.
	Basic *GoogleIdentityAccesscontextmanagerV1BasicLevel `json:"basic,omitempty"`
	// `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
	Custom *GoogleIdentityAccesscontextmanagerV1CustomLevel `json:"custom,omitempty"`
	// Description of the `AccessLevel` and its use. Does not affect behavior.
	Description *string `json:"description,omitempty"`
	// Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.
	Name *string `json:"name,omitempty"`
	// Human readable title. Must be unique within the Policy.
	Title *string `json:"title,omitempty"`
}
