package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDKeysPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDKeys400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargetsTargetIDKeys401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDKeys403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDKeys404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDKeysRequest struct {
	PathParams PostTargetsTargetIDKeysPathParams
	Request    shared.APIKeyInput `request:"mediaType=application/json"`
}

type PostTargetsTargetIDKeysResponse struct {
	APIKey                                          *shared.APIKey
	ContentType                                     string
	StatusCode                                      int64
	PostTargetsTargetIDKeys400ApplicationJSONObject *PostTargetsTargetIDKeys400ApplicationJSON
	PostTargetsTargetIDKeys401ApplicationJSONObject *PostTargetsTargetIDKeys401ApplicationJSON
	PostTargetsTargetIDKeys403ApplicationJSONObject *PostTargetsTargetIDKeys403ApplicationJSON
	PostTargetsTargetIDKeys404ApplicationJSONObject *PostTargetsTargetIDKeys404ApplicationJSON
}
