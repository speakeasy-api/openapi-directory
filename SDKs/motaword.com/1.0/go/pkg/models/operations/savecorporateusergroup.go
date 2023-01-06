package operations

import (
	"openapi/pkg/models/shared"
)

type SaveCorporateUserGroupRequest struct {
	Request shared.UserGroup `request:"mediaType=application/json"`
}

type SaveCorporateUserGroupResponse struct {
	ContentType string
	StatusCode  int64
	UserGroup   *shared.UserGroup
}
