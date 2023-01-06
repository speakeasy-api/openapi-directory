package operations

import (
	"openapi/pkg/models/shared"
)

type PatchUsersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchUsersIDRequestBodyInput struct {
	Email string                `json:"email"`
	Name  string                `json:"name"`
	Title *shared.UserTitleEnum `json:"title,omitempty"`
}

type PatchUsersID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchUsersID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchUsersID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchUsersID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchUsersIDRequest struct {
	PathParams PatchUsersIDPathParams
	Request    PatchUsersIDRequestBodyInput `request:"mediaType=application/json"`
}

type PatchUsersIDResponse struct {
	ContentType                          string
	StatusCode                           int64
	User                                 *shared.User
	PatchUsersID400ApplicationJSONObject *PatchUsersID400ApplicationJSON
	PatchUsersID401ApplicationJSONObject *PatchUsersID401ApplicationJSON
	PatchUsersID403ApplicationJSONObject *PatchUsersID403ApplicationJSON
	PatchUsersID404ApplicationJSONObject *PatchUsersID404ApplicationJSON
}
