// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// ReposUpdateRequestBodyMergeCommitMessageEnum - The default value for a merge commit message.
//
// - `PR_TITLE` - default to the pull request's title.
// - `PR_BODY` - default to the pull request's body.
// - `BLANK` - default to a blank commit message.
type ReposUpdateRequestBodyMergeCommitMessageEnum string

const (
	ReposUpdateRequestBodyMergeCommitMessageEnumPrBody  ReposUpdateRequestBodyMergeCommitMessageEnum = "PR_BODY"
	ReposUpdateRequestBodyMergeCommitMessageEnumPrTitle ReposUpdateRequestBodyMergeCommitMessageEnum = "PR_TITLE"
	ReposUpdateRequestBodyMergeCommitMessageEnumBlank   ReposUpdateRequestBodyMergeCommitMessageEnum = "BLANK"
)

func (e ReposUpdateRequestBodyMergeCommitMessageEnum) ToPointer() *ReposUpdateRequestBodyMergeCommitMessageEnum {
	return &e
}

func (e *ReposUpdateRequestBodyMergeCommitMessageEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PR_BODY":
		fallthrough
	case "PR_TITLE":
		fallthrough
	case "BLANK":
		*e = ReposUpdateRequestBodyMergeCommitMessageEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposUpdateRequestBodyMergeCommitMessageEnum: %v", v)
	}
}

// ReposUpdateRequestBodyMergeCommitTitleEnum - The default value for a merge commit title.
//
// - `PR_TITLE` - default to the pull request's title.
// - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
type ReposUpdateRequestBodyMergeCommitTitleEnum string

const (
	ReposUpdateRequestBodyMergeCommitTitleEnumPrTitle      ReposUpdateRequestBodyMergeCommitTitleEnum = "PR_TITLE"
	ReposUpdateRequestBodyMergeCommitTitleEnumMergeMessage ReposUpdateRequestBodyMergeCommitTitleEnum = "MERGE_MESSAGE"
)

func (e ReposUpdateRequestBodyMergeCommitTitleEnum) ToPointer() *ReposUpdateRequestBodyMergeCommitTitleEnum {
	return &e
}

func (e *ReposUpdateRequestBodyMergeCommitTitleEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PR_TITLE":
		fallthrough
	case "MERGE_MESSAGE":
		*e = ReposUpdateRequestBodyMergeCommitTitleEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposUpdateRequestBodyMergeCommitTitleEnum: %v", v)
	}
}

// ReposUpdateRequestBodySecurityAndAnalysisAdvancedSecurity - Use the `status` property to enable or disable GitHub Advanced Security for this repository. For more information, see "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
type ReposUpdateRequestBodySecurityAndAnalysisAdvancedSecurity struct {
	// Can be `enabled` or `disabled`.
	Status *string `json:"status,omitempty"`
}

// ReposUpdateRequestBodySecurityAndAnalysisSecretScanning - Use the `status` property to enable or disable secret scanning for this repository. For more information, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
type ReposUpdateRequestBodySecurityAndAnalysisSecretScanning struct {
	// Can be `enabled` or `disabled`.
	Status *string `json:"status,omitempty"`
}

// ReposUpdateRequestBodySecurityAndAnalysisSecretScanningPushProtection - Use the `status` property to enable or disable secret scanning push protection for this repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
type ReposUpdateRequestBodySecurityAndAnalysisSecretScanningPushProtection struct {
	// Can be `enabled` or `disabled`.
	Status *string `json:"status,omitempty"`
}

// ReposUpdateRequestBodySecurityAndAnalysis - Specify which security and analysis features to enable or disable for the repository.
//
// To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.2/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
//
// For example, to enable GitHub Advanced Security, use this data in the body of the `PATCH` request:
// `{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.
//
// You can check which security and analysis features are currently enabled by using a `GET /repos/{owner}/{repo}` request.
type ReposUpdateRequestBodySecurityAndAnalysis struct {
	// Use the `status` property to enable or disable GitHub Advanced Security for this repository. For more information, see "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
	AdvancedSecurity *ReposUpdateRequestBodySecurityAndAnalysisAdvancedSecurity `json:"advanced_security,omitempty"`
	// Use the `status` property to enable or disable secret scanning for this repository. For more information, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
	SecretScanning *ReposUpdateRequestBodySecurityAndAnalysisSecretScanning `json:"secret_scanning,omitempty"`
	// Use the `status` property to enable or disable secret scanning push protection for this repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
	SecretScanningPushProtection *ReposUpdateRequestBodySecurityAndAnalysisSecretScanningPushProtection `json:"secret_scanning_push_protection,omitempty"`
}

// ReposUpdateRequestBodySquashMergeCommitMessageEnum - The default value for a squash merge commit message:
//
// - `PR_BODY` - default to the pull request's body.
// - `COMMIT_MESSAGES` - default to the branch's commit messages.
// - `BLANK` - default to a blank commit message.
type ReposUpdateRequestBodySquashMergeCommitMessageEnum string

const (
	ReposUpdateRequestBodySquashMergeCommitMessageEnumPrBody         ReposUpdateRequestBodySquashMergeCommitMessageEnum = "PR_BODY"
	ReposUpdateRequestBodySquashMergeCommitMessageEnumCommitMessages ReposUpdateRequestBodySquashMergeCommitMessageEnum = "COMMIT_MESSAGES"
	ReposUpdateRequestBodySquashMergeCommitMessageEnumBlank          ReposUpdateRequestBodySquashMergeCommitMessageEnum = "BLANK"
)

func (e ReposUpdateRequestBodySquashMergeCommitMessageEnum) ToPointer() *ReposUpdateRequestBodySquashMergeCommitMessageEnum {
	return &e
}

func (e *ReposUpdateRequestBodySquashMergeCommitMessageEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PR_BODY":
		fallthrough
	case "COMMIT_MESSAGES":
		fallthrough
	case "BLANK":
		*e = ReposUpdateRequestBodySquashMergeCommitMessageEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposUpdateRequestBodySquashMergeCommitMessageEnum: %v", v)
	}
}

// ReposUpdateRequestBodySquashMergeCommitTitleEnum - The default value for a squash merge commit title:
//
// - `PR_TITLE` - default to the pull request's title.
// - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
type ReposUpdateRequestBodySquashMergeCommitTitleEnum string

const (
	ReposUpdateRequestBodySquashMergeCommitTitleEnumPrTitle         ReposUpdateRequestBodySquashMergeCommitTitleEnum = "PR_TITLE"
	ReposUpdateRequestBodySquashMergeCommitTitleEnumCommitOrPrTitle ReposUpdateRequestBodySquashMergeCommitTitleEnum = "COMMIT_OR_PR_TITLE"
)

func (e ReposUpdateRequestBodySquashMergeCommitTitleEnum) ToPointer() *ReposUpdateRequestBodySquashMergeCommitTitleEnum {
	return &e
}

func (e *ReposUpdateRequestBodySquashMergeCommitTitleEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PR_TITLE":
		fallthrough
	case "COMMIT_OR_PR_TITLE":
		*e = ReposUpdateRequestBodySquashMergeCommitTitleEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposUpdateRequestBodySquashMergeCommitTitleEnum: %v", v)
	}
}

// ReposUpdateRequestBodyVisibilityEnum - Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`."
type ReposUpdateRequestBodyVisibilityEnum string

const (
	ReposUpdateRequestBodyVisibilityEnumPublic   ReposUpdateRequestBodyVisibilityEnum = "public"
	ReposUpdateRequestBodyVisibilityEnumPrivate  ReposUpdateRequestBodyVisibilityEnum = "private"
	ReposUpdateRequestBodyVisibilityEnumInternal ReposUpdateRequestBodyVisibilityEnum = "internal"
)

func (e ReposUpdateRequestBodyVisibilityEnum) ToPointer() *ReposUpdateRequestBodyVisibilityEnum {
	return &e
}

func (e *ReposUpdateRequestBodyVisibilityEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "public":
		fallthrough
	case "private":
		fallthrough
	case "internal":
		*e = ReposUpdateRequestBodyVisibilityEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposUpdateRequestBodyVisibilityEnum: %v", v)
	}
}

type ReposUpdateRequestBody struct {
	// Either `true` to allow private forks, or `false` to prevent private forks.
	AllowForking *bool `json:"allow_forking,omitempty"`
	// Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
	AllowMergeCommit *bool `json:"allow_merge_commit,omitempty"`
	// Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
	AllowRebaseMerge *bool `json:"allow_rebase_merge,omitempty"`
	// Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
	AllowSquashMerge *bool `json:"allow_squash_merge,omitempty"`
	// Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.
	AllowUpdateBranch *bool `json:"allow_update_branch,omitempty"`
	// `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
	Archived *bool `json:"archived,omitempty"`
	// Updates the default branch for this repository.
	DefaultBranch *string `json:"default_branch,omitempty"`
	// Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
	DeleteBranchOnMerge *bool `json:"delete_branch_on_merge,omitempty"`
	// A short description of the repository.
	Description *string `json:"description,omitempty"`
	// Either `true` to enable issues for this repository or `false` to disable them.
	HasIssues *bool `json:"has_issues,omitempty"`
	// Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
	HasProjects *bool `json:"has_projects,omitempty"`
	// Either `true` to enable the wiki for this repository or `false` to disable it.
	HasWiki *bool `json:"has_wiki,omitempty"`
	// A URL with more information about the repository.
	Homepage *string `json:"homepage,omitempty"`
	// Either `true` to make this repo available as a template repository or `false` to prevent it.
	IsTemplate *bool `json:"is_template,omitempty"`
	// The default value for a merge commit message.
	//
	// - `PR_TITLE` - default to the pull request's title.
	// - `PR_BODY` - default to the pull request's body.
	// - `BLANK` - default to a blank commit message.
	MergeCommitMessage *ReposUpdateRequestBodyMergeCommitMessageEnum `json:"merge_commit_message,omitempty"`
	// The default value for a merge commit title.
	//
	// - `PR_TITLE` - default to the pull request's title.
	// - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
	MergeCommitTitle *ReposUpdateRequestBodyMergeCommitTitleEnum `json:"merge_commit_title,omitempty"`
	// The name of the repository.
	Name *string `json:"name,omitempty"`
	// Either `true` to make the repository private or `false` to make it public. Default: `false`.
	// **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
	Private *bool `json:"private,omitempty"`
	// Specify which security and analysis features to enable or disable for the repository.
	//
	// To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/enterprise-server@3.2/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
	//
	// For example, to enable GitHub Advanced Security, use this data in the body of the `PATCH` request:
	// `{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.
	//
	// You can check which security and analysis features are currently enabled by using a `GET /repos/{owner}/{repo}` request.
	SecurityAndAnalysis *ReposUpdateRequestBodySecurityAndAnalysis `json:"security_and_analysis,omitempty"`
	// The default value for a squash merge commit message:
	//
	// - `PR_BODY` - default to the pull request's body.
	// - `COMMIT_MESSAGES` - default to the branch's commit messages.
	// - `BLANK` - default to a blank commit message.
	SquashMergeCommitMessage *ReposUpdateRequestBodySquashMergeCommitMessageEnum `json:"squash_merge_commit_message,omitempty"`
	// The default value for a squash merge commit title:
	//
	// - `PR_TITLE` - default to the pull request's title.
	// - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
	SquashMergeCommitTitle *ReposUpdateRequestBodySquashMergeCommitTitleEnum `json:"squash_merge_commit_title,omitempty"`
	// Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
	UseSquashPrTitleAsDefault *bool `json:"use_squash_pr_title_as_default,omitempty"`
	// Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`."
	Visibility *ReposUpdateRequestBodyVisibilityEnum `json:"visibility,omitempty"`
}

type ReposUpdateRequest struct {
	RequestBody *ReposUpdateRequestBody `request:"mediaType=application/json"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Temporary Redirect
	BasicError *shared.BasicError
	// Response
	FullRepository *shared.FullRepository
	// Validation failed, or the endpoint has been spammed.
	ValidationError *shared.ValidationError
}
