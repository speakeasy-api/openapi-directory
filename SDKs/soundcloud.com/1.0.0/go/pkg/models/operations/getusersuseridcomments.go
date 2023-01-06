package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDCommentsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDCommentsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetUsersUserIDCommentsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDCommentsRequest struct {
	PathParams  GetUsersUserIDCommentsPathParams
	QueryParams GetUsersUserIDCommentsQueryParams
	Security    GetUsersUserIDCommentsSecurity
}

type GetUsersUserIDCommentsResponse struct {
	CommentsList []shared.Comment
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
