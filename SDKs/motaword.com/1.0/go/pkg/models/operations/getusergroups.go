package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserGroupsResponse struct {
	ContentType   string
	StatusCode    int64
	UserGroupList *shared.UserGroupList
}
