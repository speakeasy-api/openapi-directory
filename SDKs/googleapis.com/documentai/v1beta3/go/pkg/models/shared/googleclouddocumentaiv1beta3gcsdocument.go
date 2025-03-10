// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDocumentaiV1beta3GcsDocument - Specifies a document stored on Cloud Storage.
type GoogleCloudDocumentaiV1beta3GcsDocument struct {
	// The Cloud Storage object uri.
	GcsURI *string `json:"gcsUri,omitempty"`
	// An IANA MIME type (RFC6838) of the content.
	MimeType *string `json:"mimeType,omitempty"`
}
