package operations

import (
	"openapi/pkg/models/shared"
)

type GetCorporateUserGroupsResponse struct {
	ContentType   string
	StatusCode    int64
	UserGroupList *shared.UserGroupList
}
