package operations

import (
	"openapi/pkg/models/shared"
)

type PostLabels400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostLabels401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostLabelsRequest struct {
	Request shared.LabelInput `request:"mediaType=application/json"`
}

type PostLabelsResponse struct {
	ContentType                        string
	Label                              *shared.Label
	StatusCode                         int64
	PostLabels400ApplicationJSONObject *PostLabels400ApplicationJSON
	PostLabels401ApplicationJSONObject *PostLabels401ApplicationJSON
}
