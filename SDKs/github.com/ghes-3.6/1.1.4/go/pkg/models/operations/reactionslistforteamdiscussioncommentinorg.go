// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ReactionsListForTeamDiscussionCommentInOrgContentEnum - Returns a single [reaction type](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
type ReactionsListForTeamDiscussionCommentInOrgContentEnum string

const (
	ReactionsListForTeamDiscussionCommentInOrgContentEnumPlus1    ReactionsListForTeamDiscussionCommentInOrgContentEnum = "+1"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumMinus1   ReactionsListForTeamDiscussionCommentInOrgContentEnum = "-1"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumLaugh    ReactionsListForTeamDiscussionCommentInOrgContentEnum = "laugh"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumConfused ReactionsListForTeamDiscussionCommentInOrgContentEnum = "confused"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumHeart    ReactionsListForTeamDiscussionCommentInOrgContentEnum = "heart"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumHooray   ReactionsListForTeamDiscussionCommentInOrgContentEnum = "hooray"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumRocket   ReactionsListForTeamDiscussionCommentInOrgContentEnum = "rocket"
	ReactionsListForTeamDiscussionCommentInOrgContentEnumEyes     ReactionsListForTeamDiscussionCommentInOrgContentEnum = "eyes"
)

func (e ReactionsListForTeamDiscussionCommentInOrgContentEnum) ToPointer() *ReactionsListForTeamDiscussionCommentInOrgContentEnum {
	return &e
}

func (e *ReactionsListForTeamDiscussionCommentInOrgContentEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "+1":
		fallthrough
	case "-1":
		fallthrough
	case "laugh":
		fallthrough
	case "confused":
		fallthrough
	case "heart":
		fallthrough
	case "hooray":
		fallthrough
	case "rocket":
		fallthrough
	case "eyes":
		*e = ReactionsListForTeamDiscussionCommentInOrgContentEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReactionsListForTeamDiscussionCommentInOrgContentEnum: %v", v)
	}
}

type ReactionsListForTeamDiscussionCommentInOrgRequest struct {
	// The number that identifies the comment.
	CommentNumber int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	// Returns a single [reaction type](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
	Content *ReactionsListForTeamDiscussionCommentInOrgContentEnum `queryParam:"style=form,explode=true,name=content"`
	// The number that identifies the discussion.
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	// The organization name. The name is not case sensitive.
	Org string `pathParam:"style=simple,explode=false,name=org"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The slug of the team name.
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type ReactionsListForTeamDiscussionCommentInOrgResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	Reactions []shared.Reaction
}
