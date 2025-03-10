// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// MobileDevices - Successful response
type MobileDevices struct {
	// ETag of the resource.
	Etag *string `json:"etag,omitempty"`
	// Kind of resource this is.
	Kind *string `json:"kind,omitempty"`
	// A list of Mobile Device objects.
	Mobiledevices []MobileDevice `json:"mobiledevices,omitempty"`
	// Token used to access next page of this result.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
