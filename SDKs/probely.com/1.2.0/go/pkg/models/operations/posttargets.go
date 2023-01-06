package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargets400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargets401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargets403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargets500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsRequest struct {
	Request *shared.TargetInput `request:"mediaType=application/json"`
}

type PostTargetsResponse struct {
	ContentType                         string
	StatusCode                          int64
	Target                              *shared.Target
	PostTargets400ApplicationJSONObject *PostTargets400ApplicationJSON
	PostTargets401ApplicationJSONObject *PostTargets401ApplicationJSON
	PostTargets403ApplicationJSONObject *PostTargets403ApplicationJSON
	PostTargets500ApplicationJSONObject *PostTargets500ApplicationJSON
}
