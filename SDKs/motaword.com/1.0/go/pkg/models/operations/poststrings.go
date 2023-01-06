package operations

import (
	"openapi/pkg/models/shared"
)

type PostStringsRequestBody struct {
	Contents        []string `json:"contents,omitempty"`
	SourceLanguage  *string  `json:"source_language,omitempty"`
	TargetLanguages []string `json:"target_languages,omitempty"`
}

type PostStringsRequest struct {
	Request *PostStringsRequestBody `request:"mediaType=application/json"`
}

type PostStringsResponse struct {
	ContentType              string
	MachineTranslatedStrings *shared.MachineTranslatedStrings
	StatusCode               int64
}
