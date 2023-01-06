package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutUsersIDRequestBodyInput struct {
	Email string                `json:"email"`
	Name  string                `json:"name"`
	Title *shared.UserTitleEnum `json:"title,omitempty"`
}

type PutUsersID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutUsersID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutUsersID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutUsersID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutUsersIDRequest struct {
	PathParams PutUsersIDPathParams
	Request    PutUsersIDRequestBodyInput `request:"mediaType=application/json"`
}

type PutUsersIDResponse struct {
	ContentType                        string
	StatusCode                         int64
	User                               *shared.User
	PutUsersID400ApplicationJSONObject *PutUsersID400ApplicationJSON
	PutUsersID401ApplicationJSONObject *PutUsersID401ApplicationJSON
	PutUsersID403ApplicationJSONObject *PutUsersID403ApplicationJSON
	PutUsersID404ApplicationJSONObject *PutUsersID404ApplicationJSON
}
