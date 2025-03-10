// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

type IssueSearchResultItemLabels struct {
	Color       *string `json:"color,omitempty"`
	Default     *bool   `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	NodeID      *string `json:"node_id,omitempty"`
	URL         *string `json:"url,omitempty"`
}

type IssueSearchResultItemPullRequest struct {
	DiffURL  string     `json:"diff_url"`
	HTMLURL  string     `json:"html_url"`
	MergedAt *time.Time `json:"merged_at,omitempty"`
	PatchURL string     `json:"patch_url"`
	URL      string     `json:"url"`
}

// IssueSearchResultItem - Issue Search Result Item
type IssueSearchResultItem struct {
	ActiveLockReason *string `json:"active_lock_reason,omitempty"`
	// Simple User
	Assignee  NullableSimpleUser `json:"assignee"`
	Assignees []SimpleUser       `json:"assignees,omitempty"`
	// How the author is associated with the repository.
	AuthorAssociation AuthorAssociationEnum         `json:"author_association"`
	Body              *string                       `json:"body,omitempty"`
	BodyHTML          *string                       `json:"body_html,omitempty"`
	BodyText          *string                       `json:"body_text,omitempty"`
	ClosedAt          time.Time                     `json:"closed_at"`
	Comments          int64                         `json:"comments"`
	CommentsURL       string                        `json:"comments_url"`
	CreatedAt         time.Time                     `json:"created_at"`
	Draft             *bool                         `json:"draft,omitempty"`
	EventsURL         string                        `json:"events_url"`
	HTMLURL           string                        `json:"html_url"`
	ID                int64                         `json:"id"`
	Labels            []IssueSearchResultItemLabels `json:"labels"`
	LabelsURL         string                        `json:"labels_url"`
	Locked            bool                          `json:"locked"`
	// A collection of related issues and pull requests.
	Milestone NullableMilestone `json:"milestone"`
	NodeID    string            `json:"node_id"`
	Number    int64             `json:"number"`
	// GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
	PerformedViaGithubApp *NullableIntegration              `json:"performed_via_github_app,omitempty"`
	PullRequest           *IssueSearchResultItemPullRequest `json:"pull_request,omitempty"`
	Reactions             *ReactionRollup                   `json:"reactions,omitempty"`
	// A git repository
	Repository    *Repository               `json:"repository,omitempty"`
	RepositoryURL string                    `json:"repository_url"`
	Score         float64                   `json:"score"`
	State         string                    `json:"state"`
	StateReason   *string                   `json:"state_reason,omitempty"`
	TextMatches   []SearchResultTextMatches `json:"text_matches,omitempty"`
	TimelineURL   *string                   `json:"timeline_url,omitempty"`
	Title         string                    `json:"title"`
	UpdatedAt     time.Time                 `json:"updated_at"`
	URL           string                    `json:"url"`
	// Simple User
	User NullableSimpleUser `json:"user"`
}
