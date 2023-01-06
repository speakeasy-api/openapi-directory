package operations

import (
	"openapi/pkg/models/shared"
)

type GetTranscriptByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTranscriptByIDHeaders struct {
	Accept *shared.AcceptTranscriptEnum `header:"style=simple,explode=false,name=Accept"`
}

// GetTranscriptByID404ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetTranscriptByID404ApplicationProblemPlusJSON struct {
	Status *int64  `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

// GetTranscriptByID406ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetTranscriptByID406ApplicationProblemPlusJSON struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	CurrentValue  *string  `json:"current_value,omitempty"`
	Detail        *string  `json:"detail,omitempty"`
}

// GetTranscriptByID409ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetTranscriptByID409ApplicationProblemPlusJSON struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	CurrentValue  *string  `json:"current_value,omitempty"`
	Detail        *string  `json:"detail,omitempty"`
}

type GetTranscriptByIDRequest struct {
	PathParams GetTranscriptByIDPathParams
	Headers    GetTranscriptByIDHeaders
}

type GetTranscriptByIDResponse struct {
	ContentType                                          string
	GetTranscriptByID401ApplicationProblemPlusJSONAny    *interface{}
	GetTranscriptByID404ApplicationProblemPlusJSONObject *GetTranscriptByID404ApplicationProblemPlusJSON
	GetTranscriptByID406ApplicationProblemPlusJSONObject *GetTranscriptByID406ApplicationProblemPlusJSON
	GetTranscriptByID409ApplicationProblemPlusJSONObject *GetTranscriptByID409ApplicationProblemPlusJSON
	StatusCode                                           int64
	Transcript                                           *shared.Transcript
	TranscriptText                                       *string
}
