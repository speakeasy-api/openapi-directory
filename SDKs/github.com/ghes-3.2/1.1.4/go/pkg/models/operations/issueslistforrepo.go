// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
	"time"
)

// IssuesListForRepoSortEnum - What to sort results by.
type IssuesListForRepoSortEnum string

const (
	IssuesListForRepoSortEnumCreated  IssuesListForRepoSortEnum = "created"
	IssuesListForRepoSortEnumUpdated  IssuesListForRepoSortEnum = "updated"
	IssuesListForRepoSortEnumComments IssuesListForRepoSortEnum = "comments"
)

func (e IssuesListForRepoSortEnum) ToPointer() *IssuesListForRepoSortEnum {
	return &e
}

func (e *IssuesListForRepoSortEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "created":
		fallthrough
	case "updated":
		fallthrough
	case "comments":
		*e = IssuesListForRepoSortEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for IssuesListForRepoSortEnum: %v", v)
	}
}

// IssuesListForRepoStateEnum - Indicates the state of the issues to return.
type IssuesListForRepoStateEnum string

const (
	IssuesListForRepoStateEnumOpen   IssuesListForRepoStateEnum = "open"
	IssuesListForRepoStateEnumClosed IssuesListForRepoStateEnum = "closed"
	IssuesListForRepoStateEnumAll    IssuesListForRepoStateEnum = "all"
)

func (e IssuesListForRepoStateEnum) ToPointer() *IssuesListForRepoStateEnum {
	return &e
}

func (e *IssuesListForRepoStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "open":
		fallthrough
	case "closed":
		fallthrough
	case "all":
		*e = IssuesListForRepoStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for IssuesListForRepoStateEnum: %v", v)
	}
}

type IssuesListForRepoRequest struct {
	// Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
	Assignee *string `queryParam:"style=form,explode=true,name=assignee"`
	// The user that created the issue.
	Creator *string `queryParam:"style=form,explode=true,name=creator"`
	// The direction to sort the results by.
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	// A list of comma separated label names. Example: `bug,ui,@high`
	Labels *string `queryParam:"style=form,explode=true,name=labels"`
	// A user that's mentioned in the issue.
	Mentioned *string `queryParam:"style=form,explode=true,name=mentioned"`
	// If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
	Milestone *string `queryParam:"style=form,explode=true,name=milestone"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
	// Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	Since *time.Time `queryParam:"style=form,explode=true,name=since"`
	// What to sort results by.
	Sort *IssuesListForRepoSortEnum `queryParam:"style=form,explode=true,name=sort"`
	// Indicates the state of the issues to return.
	State *IssuesListForRepoStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type IssuesListForRepoResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Moved permanently
	BasicError *shared.BasicError
	// Response
	Issues []shared.Issue
	// Validation failed, or the endpoint has been spammed.
	ValidationError *shared.ValidationError
}
