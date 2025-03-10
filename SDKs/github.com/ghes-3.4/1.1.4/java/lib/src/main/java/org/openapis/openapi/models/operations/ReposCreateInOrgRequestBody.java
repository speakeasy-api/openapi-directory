/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposCreateInOrgRequestBody {
    /**
     * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_auto_merge")
    public Boolean allowAutoMerge;

    public ReposCreateInOrgRequestBody withAllowAutoMerge(Boolean allowAutoMerge) {
        this.allowAutoMerge = allowAutoMerge;
        return this;
    }
    
    /**
     * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commit")
    public Boolean allowMergeCommit;

    public ReposCreateInOrgRequestBody withAllowMergeCommit(Boolean allowMergeCommit) {
        this.allowMergeCommit = allowMergeCommit;
        return this;
    }
    
    /**
     * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_merge")
    public Boolean allowRebaseMerge;

    public ReposCreateInOrgRequestBody withAllowRebaseMerge(Boolean allowRebaseMerge) {
        this.allowRebaseMerge = allowRebaseMerge;
        return this;
    }
    
    /**
     * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;

    public ReposCreateInOrgRequestBody withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    
    /**
     * Pass `true` to create an initial commit with empty README.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_init")
    public Boolean autoInit;

    public ReposCreateInOrgRequestBody withAutoInit(Boolean autoInit) {
        this.autoInit = autoInit;
        return this;
    }
    
    /**
     * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. **The authenticated user must be an organization owner to set this property to `true`.**
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;

    public ReposCreateInOrgRequestBody withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    
    /**
     * A short description of the repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public ReposCreateInOrgRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitignore_template")
    public String gitignoreTemplate;

    public ReposCreateInOrgRequestBody withGitignoreTemplate(String gitignoreTemplate) {
        this.gitignoreTemplate = gitignoreTemplate;
        return this;
    }
    
    /**
     * Whether downloads are enabled.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_downloads")
    public Boolean hasDownloads;

    public ReposCreateInOrgRequestBody withHasDownloads(Boolean hasDownloads) {
        this.hasDownloads = hasDownloads;
        return this;
    }
    
    /**
     * Either `true` to enable issues for this repository or `false` to disable them.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_issues")
    public Boolean hasIssues;

    public ReposCreateInOrgRequestBody withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    
    /**
     * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_projects")
    public Boolean hasProjects;

    public ReposCreateInOrgRequestBody withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    
    /**
     * Either `true` to enable the wiki for this repository or `false` to disable it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_wiki")
    public Boolean hasWiki;

    public ReposCreateInOrgRequestBody withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    
    /**
     * A URL with more information about the repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public String homepage;

    public ReposCreateInOrgRequestBody withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    
    /**
     * Either `true` to make this repo available as a template repository or `false` to prevent it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;

    public ReposCreateInOrgRequestBody withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    
    /**
     * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/enterprise-server@3.4/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_template")
    public String licenseTemplate;

    public ReposCreateInOrgRequestBody withLicenseTemplate(String licenseTemplate) {
        this.licenseTemplate = licenseTemplate;
        return this;
    }
    
    /**
     * The default value for a merge commit message.
     * 
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merge_commit_message")
    public ReposCreateInOrgRequestBodyMergeCommitMessageEnum mergeCommitMessage;

    public ReposCreateInOrgRequestBody withMergeCommitMessage(ReposCreateInOrgRequestBodyMergeCommitMessageEnum mergeCommitMessage) {
        this.mergeCommitMessage = mergeCommitMessage;
        return this;
    }
    
    /**
     * The default value for a merge commit title.
     * 
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merge_commit_title")
    public ReposCreateInOrgRequestBodyMergeCommitTitleEnum mergeCommitTitle;

    public ReposCreateInOrgRequestBody withMergeCommitTitle(ReposCreateInOrgRequestBodyMergeCommitTitleEnum mergeCommitTitle) {
        this.mergeCommitTitle = mergeCommitTitle;
        return this;
    }
    
    /**
     * The name of the repository.
     */
    @JsonProperty("name")
    public String name;

    public ReposCreateInOrgRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Whether the repository is private.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;

    public ReposCreateInOrgRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    
    /**
     * The default value for a squash merge commit message:
     * 
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("squash_merge_commit_message")
    public ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum squashMergeCommitMessage;

    public ReposCreateInOrgRequestBody withSquashMergeCommitMessage(ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum squashMergeCommitMessage) {
        this.squashMergeCommitMessage = squashMergeCommitMessage;
        return this;
    }
    
    /**
     * The default value for a squash merge commit title:
     * 
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("squash_merge_commit_title")
    public ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum squashMergeCommitTitle;

    public ReposCreateInOrgRequestBody withSquashMergeCommitTitle(ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum squashMergeCommitTitle) {
        this.squashMergeCommitTitle = squashMergeCommitTitle;
        return this;
    }
    
    /**
     * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_id")
    public Long teamId;

    public ReposCreateInOrgRequestBody withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
    
    /**
     * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_squash_pr_title_as_default")
    public Boolean useSquashPrTitleAsDefault;

    public ReposCreateInOrgRequestBody withUseSquashPrTitleAsDefault(Boolean useSquashPrTitleAsDefault) {
        this.useSquashPrTitleAsDefault = useSquashPrTitleAsDefault;
        return this;
    }
    
    /**
     * The visibility of the repository. **Note**: For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://docs.github.com/enterprise-server@3.4/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.  
     * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public ReposCreateInOrgRequestBodyVisibilityEnum visibility;

    public ReposCreateInOrgRequestBody withVisibility(ReposCreateInOrgRequestBodyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
    
    public ReposCreateInOrgRequestBody(@JsonProperty("name") String name) {
        this.name = name;
  }
}
