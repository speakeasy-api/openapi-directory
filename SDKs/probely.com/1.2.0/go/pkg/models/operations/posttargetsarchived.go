package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsArchived200ApplicationJSON struct {
	Length          *int64          `json:"length,omitempty"`
	Page            *int64          `json:"page,omitempty"`
	PageTotal       *int64          `json:"page_total,omitempty"`
	PaginationCount *int64          `json:"pagination_count,omitempty"`
	Results         []shared.Target `json:"results,omitempty"`
}

type PostTargetsArchived400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargetsArchived401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsArchived403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsArchivedRequest struct {
	Request []string `request:"mediaType=application/json"`
}

type PostTargetsArchivedResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	PostTargetsArchived200ApplicationJSONObject *PostTargetsArchived200ApplicationJSON
	PostTargetsArchived400ApplicationJSONObject *PostTargetsArchived400ApplicationJSON
	PostTargetsArchived401ApplicationJSONObject *PostTargetsArchived401ApplicationJSON
	PostTargetsArchived403ApplicationJSONObject *PostTargetsArchived403ApplicationJSON
}
