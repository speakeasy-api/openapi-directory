// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CustomChannels - Successful response
type CustomChannels struct {
	// ETag of this response for caching purposes.
	Etag *string `json:"etag,omitempty"`
	// The custom channels returned in this list response.
	Items []CustomChannel `json:"items,omitempty"`
	// Kind of list this is, in this case adsense#customChannels.
	Kind *string `json:"kind,omitempty"`
	// Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
