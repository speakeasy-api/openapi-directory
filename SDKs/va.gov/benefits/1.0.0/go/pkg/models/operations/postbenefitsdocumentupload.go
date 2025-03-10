// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostBenefitsDocumentUploadSecurity struct {
	Apikey string `security:"scheme,type=apiKey,subtype=header,name=apikey"`
}

// PostBenefitsDocumentUpload500ApplicationJSON - Internal server error
type PostBenefitsDocumentUpload500ApplicationJSON struct {
	// Unambiguous status code. Only present if status = "error"
	//
	// * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
	// * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
	// * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
	// * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
	// * `DOC105` - Invalid or unknown id
	// * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
	// * `DOC107` - Empty payload.
	// * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
	// * `DOC201` - Upload server error.
	// * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
	//
	Code *string `json:"code,omitempty"`
	// Human readable error detail. Only present if status = "error"
	Detail *string `json:"detail,omitempty"`
	// Unambiguous status code. Only present if status = "error"
	//
	// * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
	// * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
	// * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
	// * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
	// * `DOC105` - Invalid or unknown id
	// * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
	// * `DOC107` - Empty payload.
	// * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
	// * `DOC201` - Upload server error.
	// * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
	//
	Status *string `json:"status,omitempty"`
	// Human readable title description.
	Title *string `json:"title,omitempty"`
}

// PostBenefitsDocumentUpload429ApplicationJSON - Too many requests
type PostBenefitsDocumentUpload429ApplicationJSON struct {
	// message
	Message *string `json:"Message,omitempty"`
}

// PostBenefitsDocumentUpload422ApplicationJSON - Unprocessable Entity
type PostBenefitsDocumentUpload422ApplicationJSON struct {
	Errors []shared.ErrorModel `json:"errors"`
}

// PostBenefitsDocumentUpload403ApplicationJSON - Forbidden
type PostBenefitsDocumentUpload403ApplicationJSON struct {
	// Error detail
	Message *string `json:"Message,omitempty"`
}

// PostBenefitsDocumentUpload401ApplicationJSON - Unauthorized request
type PostBenefitsDocumentUpload401ApplicationJSON struct {
	// Error detail
	Message *string `json:"Message,omitempty"`
}

// PostBenefitsDocumentUpload202ApplicationJSON - Accepted. Location generated
type PostBenefitsDocumentUpload202ApplicationJSON struct {
	// Status record for a previously initiated document submission.
	Data shared.DocumentUploadPath `json:"data"`
}

type PostBenefitsDocumentUploadResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Accepted. Location generated
	PostBenefitsDocumentUpload202ApplicationJSONObject *PostBenefitsDocumentUpload202ApplicationJSON
	// Unauthorized request
	PostBenefitsDocumentUpload401ApplicationJSONObject *PostBenefitsDocumentUpload401ApplicationJSON
	// Forbidden
	PostBenefitsDocumentUpload403ApplicationJSONObject *PostBenefitsDocumentUpload403ApplicationJSON
	// Unprocessable Entity
	PostBenefitsDocumentUpload422ApplicationJSONObject *PostBenefitsDocumentUpload422ApplicationJSON
	// Too many requests
	PostBenefitsDocumentUpload429ApplicationJSONObject *PostBenefitsDocumentUpload429ApplicationJSON
	// Internal server error
	PostBenefitsDocumentUpload500ApplicationJSONObject *PostBenefitsDocumentUpload500ApplicationJSON
}
