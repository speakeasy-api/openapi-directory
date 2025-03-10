// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

type PullRequestLinks struct {
	// Hypermedia Link
	Comments Link `json:"comments"`
	// Hypermedia Link
	Commits Link `json:"commits"`
	// Hypermedia Link
	HTML Link `json:"html"`
	// Hypermedia Link
	Issue Link `json:"issue"`
	// Hypermedia Link
	ReviewComment Link `json:"review_comment"`
	// Hypermedia Link
	ReviewComments Link `json:"review_comments"`
	// Hypermedia Link
	Self Link `json:"self"`
	// Hypermedia Link
	Statuses Link `json:"statuses"`
}

type PullRequestBaseRepoOwner struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestBaseRepoPermissions struct {
	Admin    bool  `json:"admin"`
	Maintain *bool `json:"maintain,omitempty"`
	Pull     bool  `json:"pull"`
	Push     bool  `json:"push"`
	Triage   *bool `json:"triage,omitempty"`
}

type PullRequestBaseRepo struct {
	AllowForking     *bool     `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool     `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool     `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool     `json:"allow_squash_merge,omitempty"`
	ArchiveURL       string    `json:"archive_url"`
	Archived         bool      `json:"archived"`
	AssigneesURL     string    `json:"assignees_url"`
	BlobsURL         string    `json:"blobs_url"`
	BranchesURL      string    `json:"branches_url"`
	CloneURL         string    `json:"clone_url"`
	CollaboratorsURL string    `json:"collaborators_url"`
	CommentsURL      string    `json:"comments_url"`
	CommitsURL       string    `json:"commits_url"`
	CompareURL       string    `json:"compare_url"`
	ContentsURL      string    `json:"contents_url"`
	ContributorsURL  string    `json:"contributors_url"`
	CreatedAt        time.Time `json:"created_at"`
	DefaultBranch    string    `json:"default_branch"`
	DeploymentsURL   string    `json:"deployments_url"`
	Description      string    `json:"description"`
	Disabled         bool      `json:"disabled"`
	DownloadsURL     string    `json:"downloads_url"`
	EventsURL        string    `json:"events_url"`
	Fork             bool      `json:"fork"`
	Forks            int64     `json:"forks"`
	ForksCount       int64     `json:"forks_count"`
	ForksURL         string    `json:"forks_url"`
	FullName         string    `json:"full_name"`
	GitCommitsURL    string    `json:"git_commits_url"`
	GitRefsURL       string    `json:"git_refs_url"`
	GitTagsURL       string    `json:"git_tags_url"`
	GitURL           string    `json:"git_url"`
	HasDownloads     bool      `json:"has_downloads"`
	HasIssues        bool      `json:"has_issues"`
	HasPages         bool      `json:"has_pages"`
	HasProjects      bool      `json:"has_projects"`
	HasWiki          bool      `json:"has_wiki"`
	Homepage         string    `json:"homepage"`
	HooksURL         string    `json:"hooks_url"`
	HTMLURL          string    `json:"html_url"`
	ID               int64     `json:"id"`
	IsTemplate       *bool     `json:"is_template,omitempty"`
	IssueCommentURL  string    `json:"issue_comment_url"`
	IssueEventsURL   string    `json:"issue_events_url"`
	IssuesURL        string    `json:"issues_url"`
	KeysURL          string    `json:"keys_url"`
	LabelsURL        string    `json:"labels_url"`
	Language         string    `json:"language"`
	LanguagesURL     string    `json:"languages_url"`
	// License Simple
	License          NullableLicenseSimple           `json:"license"`
	MasterBranch     *string                         `json:"master_branch,omitempty"`
	MergesURL        string                          `json:"merges_url"`
	MilestonesURL    string                          `json:"milestones_url"`
	MirrorURL        string                          `json:"mirror_url"`
	Name             string                          `json:"name"`
	NodeID           string                          `json:"node_id"`
	NotificationsURL string                          `json:"notifications_url"`
	OpenIssues       int64                           `json:"open_issues"`
	OpenIssuesCount  int64                           `json:"open_issues_count"`
	Owner            PullRequestBaseRepoOwner        `json:"owner"`
	Permissions      *PullRequestBaseRepoPermissions `json:"permissions,omitempty"`
	Private          bool                            `json:"private"`
	PullsURL         string                          `json:"pulls_url"`
	PushedAt         time.Time                       `json:"pushed_at"`
	ReleasesURL      string                          `json:"releases_url"`
	Size             int64                           `json:"size"`
	SSHURL           string                          `json:"ssh_url"`
	StargazersCount  int64                           `json:"stargazers_count"`
	StargazersURL    string                          `json:"stargazers_url"`
	StatusesURL      string                          `json:"statuses_url"`
	SubscribersURL   string                          `json:"subscribers_url"`
	SubscriptionURL  string                          `json:"subscription_url"`
	SvnURL           string                          `json:"svn_url"`
	TagsURL          string                          `json:"tags_url"`
	TeamsURL         string                          `json:"teams_url"`
	TempCloneToken   *string                         `json:"temp_clone_token,omitempty"`
	Topics           []string                        `json:"topics,omitempty"`
	TreesURL         string                          `json:"trees_url"`
	UpdatedAt        time.Time                       `json:"updated_at"`
	URL              string                          `json:"url"`
	// The repository visibility: public, private, or internal.
	Visibility    *string `json:"visibility,omitempty"`
	Watchers      int64   `json:"watchers"`
	WatchersCount int64   `json:"watchers_count"`
}

type PullRequestBaseUser struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestBase struct {
	Label string              `json:"label"`
	Ref   string              `json:"ref"`
	Repo  PullRequestBaseRepo `json:"repo"`
	Sha   string              `json:"sha"`
	User  PullRequestBaseUser `json:"user"`
}

type PullRequestHeadRepoLicense struct {
	Key    string `json:"key"`
	Name   string `json:"name"`
	NodeID string `json:"node_id"`
	SpdxID string `json:"spdx_id"`
	URL    string `json:"url"`
}

type PullRequestHeadRepoOwner struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestHeadRepoPermissions struct {
	Admin    bool  `json:"admin"`
	Maintain *bool `json:"maintain,omitempty"`
	Pull     bool  `json:"pull"`
	Push     bool  `json:"push"`
	Triage   *bool `json:"triage,omitempty"`
}

type PullRequestHeadRepo struct {
	AllowForking     *bool                           `json:"allow_forking,omitempty"`
	AllowMergeCommit *bool                           `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool                           `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool                           `json:"allow_squash_merge,omitempty"`
	ArchiveURL       string                          `json:"archive_url"`
	Archived         bool                            `json:"archived"`
	AssigneesURL     string                          `json:"assignees_url"`
	BlobsURL         string                          `json:"blobs_url"`
	BranchesURL      string                          `json:"branches_url"`
	CloneURL         string                          `json:"clone_url"`
	CollaboratorsURL string                          `json:"collaborators_url"`
	CommentsURL      string                          `json:"comments_url"`
	CommitsURL       string                          `json:"commits_url"`
	CompareURL       string                          `json:"compare_url"`
	ContentsURL      string                          `json:"contents_url"`
	ContributorsURL  string                          `json:"contributors_url"`
	CreatedAt        time.Time                       `json:"created_at"`
	DefaultBranch    string                          `json:"default_branch"`
	DeploymentsURL   string                          `json:"deployments_url"`
	Description      string                          `json:"description"`
	Disabled         bool                            `json:"disabled"`
	DownloadsURL     string                          `json:"downloads_url"`
	EventsURL        string                          `json:"events_url"`
	Fork             bool                            `json:"fork"`
	Forks            int64                           `json:"forks"`
	ForksCount       int64                           `json:"forks_count"`
	ForksURL         string                          `json:"forks_url"`
	FullName         string                          `json:"full_name"`
	GitCommitsURL    string                          `json:"git_commits_url"`
	GitRefsURL       string                          `json:"git_refs_url"`
	GitTagsURL       string                          `json:"git_tags_url"`
	GitURL           string                          `json:"git_url"`
	HasDownloads     bool                            `json:"has_downloads"`
	HasIssues        bool                            `json:"has_issues"`
	HasPages         bool                            `json:"has_pages"`
	HasProjects      bool                            `json:"has_projects"`
	HasWiki          bool                            `json:"has_wiki"`
	Homepage         string                          `json:"homepage"`
	HooksURL         string                          `json:"hooks_url"`
	HTMLURL          string                          `json:"html_url"`
	ID               int64                           `json:"id"`
	IsTemplate       *bool                           `json:"is_template,omitempty"`
	IssueCommentURL  string                          `json:"issue_comment_url"`
	IssueEventsURL   string                          `json:"issue_events_url"`
	IssuesURL        string                          `json:"issues_url"`
	KeysURL          string                          `json:"keys_url"`
	LabelsURL        string                          `json:"labels_url"`
	Language         string                          `json:"language"`
	LanguagesURL     string                          `json:"languages_url"`
	License          PullRequestHeadRepoLicense      `json:"license"`
	MasterBranch     *string                         `json:"master_branch,omitempty"`
	MergesURL        string                          `json:"merges_url"`
	MilestonesURL    string                          `json:"milestones_url"`
	MirrorURL        string                          `json:"mirror_url"`
	Name             string                          `json:"name"`
	NodeID           string                          `json:"node_id"`
	NotificationsURL string                          `json:"notifications_url"`
	OpenIssues       int64                           `json:"open_issues"`
	OpenIssuesCount  int64                           `json:"open_issues_count"`
	Owner            PullRequestHeadRepoOwner        `json:"owner"`
	Permissions      *PullRequestHeadRepoPermissions `json:"permissions,omitempty"`
	Private          bool                            `json:"private"`
	PullsURL         string                          `json:"pulls_url"`
	PushedAt         time.Time                       `json:"pushed_at"`
	ReleasesURL      string                          `json:"releases_url"`
	Size             int64                           `json:"size"`
	SSHURL           string                          `json:"ssh_url"`
	StargazersCount  int64                           `json:"stargazers_count"`
	StargazersURL    string                          `json:"stargazers_url"`
	StatusesURL      string                          `json:"statuses_url"`
	SubscribersURL   string                          `json:"subscribers_url"`
	SubscriptionURL  string                          `json:"subscription_url"`
	SvnURL           string                          `json:"svn_url"`
	TagsURL          string                          `json:"tags_url"`
	TeamsURL         string                          `json:"teams_url"`
	TempCloneToken   *string                         `json:"temp_clone_token,omitempty"`
	Topics           []string                        `json:"topics,omitempty"`
	TreesURL         string                          `json:"trees_url"`
	UpdatedAt        time.Time                       `json:"updated_at"`
	URL              string                          `json:"url"`
	// The repository visibility: public, private, or internal.
	Visibility    *string `json:"visibility,omitempty"`
	Watchers      int64   `json:"watchers"`
	WatchersCount int64   `json:"watchers_count"`
}

type PullRequestHeadUser struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestHead struct {
	Label string              `json:"label"`
	Ref   string              `json:"ref"`
	Repo  PullRequestHeadRepo `json:"repo"`
	Sha   string              `json:"sha"`
	User  PullRequestHeadUser `json:"user"`
}

type PullRequestLabels struct {
	Color       string `json:"color"`
	Default     bool   `json:"default"`
	Description string `json:"description"`
	ID          int64  `json:"id"`
	Name        string `json:"name"`
	NodeID      string `json:"node_id"`
	URL         string `json:"url"`
}

// PullRequestStateEnum - State of this Pull Request. Either `open` or `closed`.
type PullRequestStateEnum string

const (
	PullRequestStateEnumOpen   PullRequestStateEnum = "open"
	PullRequestStateEnumClosed PullRequestStateEnum = "closed"
)

func (e PullRequestStateEnum) ToPointer() *PullRequestStateEnum {
	return &e
}

func (e *PullRequestStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "open":
		fallthrough
	case "closed":
		*e = PullRequestStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PullRequestStateEnum: %v", v)
	}
}

// PullRequest - Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
type PullRequest struct {
	Links            PullRequestLinks `json:"_links"`
	ActiveLockReason *string          `json:"active_lock_reason,omitempty"`
	Additions        int64            `json:"additions"`
	// Simple User
	Assignee  NullableSimpleUser `json:"assignee"`
	Assignees []SimpleUser       `json:"assignees,omitempty"`
	// How the author is associated with the repository.
	AuthorAssociation AuthorAssociationEnum `json:"author_association"`
	// The status of auto merging a pull request.
	AutoMerge    AutoMerge       `json:"auto_merge"`
	Base         PullRequestBase `json:"base"`
	Body         string          `json:"body"`
	ChangedFiles int64           `json:"changed_files"`
	ClosedAt     time.Time       `json:"closed_at"`
	Comments     int64           `json:"comments"`
	CommentsURL  string          `json:"comments_url"`
	Commits      int64           `json:"commits"`
	CommitsURL   string          `json:"commits_url"`
	CreatedAt    time.Time       `json:"created_at"`
	Deletions    int64           `json:"deletions"`
	DiffURL      string          `json:"diff_url"`
	// Indicates whether or not the pull request is a draft.
	Draft    *bool               `json:"draft,omitempty"`
	Head     PullRequestHead     `json:"head"`
	HTMLURL  string              `json:"html_url"`
	ID       int64               `json:"id"`
	IssueURL string              `json:"issue_url"`
	Labels   []PullRequestLabels `json:"labels"`
	Locked   bool                `json:"locked"`
	// Indicates whether maintainers can modify the pull request.
	MaintainerCanModify bool      `json:"maintainer_can_modify"`
	MergeCommitSha      string    `json:"merge_commit_sha"`
	Mergeable           bool      `json:"mergeable"`
	MergeableState      string    `json:"mergeable_state"`
	Merged              bool      `json:"merged"`
	MergedAt            time.Time `json:"merged_at"`
	// Simple User
	MergedBy NullableSimpleUser `json:"merged_by"`
	// A collection of related issues and pull requests.
	Milestone NullableMilestone `json:"milestone"`
	NodeID    string            `json:"node_id"`
	// Number uniquely identifying the pull request within its repository.
	Number             int64        `json:"number"`
	PatchURL           string       `json:"patch_url"`
	Rebaseable         *bool        `json:"rebaseable,omitempty"`
	RequestedReviewers []SimpleUser `json:"requested_reviewers,omitempty"`
	RequestedTeams     []TeamSimple `json:"requested_teams,omitempty"`
	ReviewCommentURL   string       `json:"review_comment_url"`
	ReviewComments     int64        `json:"review_comments"`
	ReviewCommentsURL  string       `json:"review_comments_url"`
	// State of this Pull Request. Either `open` or `closed`.
	State       PullRequestStateEnum `json:"state"`
	StatusesURL string               `json:"statuses_url"`
	// The title of the pull request.
	Title     string    `json:"title"`
	UpdatedAt time.Time `json:"updated_at"`
	URL       string    `json:"url"`
	// Simple User
	User NullableSimpleUser `json:"user"`
}
