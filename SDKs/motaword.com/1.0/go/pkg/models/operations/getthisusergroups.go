package operations

import (
	"openapi/pkg/models/shared"
)

type GetThisUserGroupsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetThisUserGroupsRequest struct {
	PathParams GetThisUserGroupsPathParams
}

type GetThisUserGroupsResponse struct {
	ContentType   string
	StatusCode    int64
	UserGroupList *shared.UserGroupList
}
