package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitTranscriptionJobMultipartFormDataMedia struct {
	Content []byte `multipartForm:"content"`
	Media   string `multipartForm:"name=media"`
}

type SubmitTranscriptionJobMultipartFormData struct {
	Media   *SubmitTranscriptionJobMultipartFormDataMedia `multipartForm:"file"`
	Options *shared.SubmitJobOptions                      `multipartForm:"name=options,json"`
}

type SubmitTranscriptionJobRequests struct {
	SubmitJobMediaURLOptions *shared.SubmitJobMediaURLOptions         `request:"mediaType=application/json"`
	Object                   *SubmitTranscriptionJobMultipartFormData `request:"mediaType=multipart/form-data"`
}

// SubmitTranscriptionJob400ApplicationProblemPlusJSON
// Problem details object returned on errors
type SubmitTranscriptionJob400ApplicationProblemPlusJSON struct {
	Parameters map[string]interface{} `json:"parameters,omitempty"`
	Status     *int64                 `json:"status,omitempty"`
	Title      *string                `json:"title,omitempty"`
	Type       *string                `json:"type,omitempty"`
}

type SubmitTranscriptionJobRequest struct {
	Request SubmitTranscriptionJobRequests
}

type SubmitTranscriptionJobResponse struct {
	ContentType                                               string
	Job                                                       *shared.Job
	StatusCode                                                int64
	SubmitTranscriptionJob400ApplicationProblemPlusJSONObject *SubmitTranscriptionJob400ApplicationProblemPlusJSON
	SubmitTranscriptionJob401ApplicationProblemPlusJSONAny    *interface{}
	SubmitTranscriptionJob413ApplicationProblemPlusJSONAny    *interface{}
}
