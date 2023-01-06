package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsListForIssueCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsListForIssueCommentQueryParams struct {
	Content *shared.CommentIDEnum `queryParam:"style=form,explode=true,name=content"`
	Page    *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                `queryParam:"style=form,explode=true,name=per_page"`
}

type ReactionsListForIssueComment415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReactionsListForIssueCommentRequest struct {
	PathParams  ReactionsListForIssueCommentPathParams
	QueryParams ReactionsListForIssueCommentQueryParams
}

type ReactionsListForIssueCommentResponse struct {
	ContentType                                          string
	Headers                                              map[string][]string
	StatusCode                                           int64
	BasicError                                           *shared.BasicError
	Reactions                                            []shared.Reaction
	ReactionsListForIssueComment415ApplicationJSONObject *ReactionsListForIssueComment415ApplicationJSON
}
