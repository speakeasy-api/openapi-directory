// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TeamsUpdateDiscussionCommentLegacyRequestBody struct {
	// The discussion comment's body text.
	Body string `json:"body"`
}

type TeamsUpdateDiscussionCommentLegacyRequest struct {
	RequestBody TeamsUpdateDiscussionCommentLegacyRequestBody `request:"mediaType=application/json"`
	// The number that identifies the comment.
	CommentNumber int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	// The number that identifies the discussion.
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	// The unique identifier of the team.
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateDiscussionCommentLegacyResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	TeamDiscussionComment *shared.TeamDiscussionComment
}
