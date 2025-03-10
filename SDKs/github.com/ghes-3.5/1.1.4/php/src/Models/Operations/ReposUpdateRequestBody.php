<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ReposUpdateRequestBody
{
    /**
     * Either `true` to allow private forks, or `false` to prevent private forks.
     * 
     * @var ?bool $allowForking
     */
	#[\JMS\Serializer\Annotation\SerializedName('allow_forking')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowForking = null;
    
    /**
     * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
     * 
     * @var ?bool $allowMergeCommit
     */
	#[\JMS\Serializer\Annotation\SerializedName('allow_merge_commit')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowMergeCommit = null;
    
    /**
     * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
     * 
     * @var ?bool $allowRebaseMerge
     */
	#[\JMS\Serializer\Annotation\SerializedName('allow_rebase_merge')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowRebaseMerge = null;
    
    /**
     * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
     * 
     * @var ?bool $allowSquashMerge
     */
	#[\JMS\Serializer\Annotation\SerializedName('allow_squash_merge')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowSquashMerge = null;
    
    /**
     * Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.
     * 
     * @var ?bool $allowUpdateBranch
     */
	#[\JMS\Serializer\Annotation\SerializedName('allow_update_branch')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowUpdateBranch = null;
    
    /**
     * Whether to archive this repository. **Note**: You cannot unarchive repositories through the API.
     * 
     * @var ?bool $archived
     */
	#[\JMS\Serializer\Annotation\SerializedName('archived')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $archived = null;
    
    /**
     * Updates the default branch for this repository.
     * 
     * @var ?string $defaultBranch
     */
	#[\JMS\Serializer\Annotation\SerializedName('default_branch')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $defaultBranch = null;
    
    /**
     * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
     * 
     * @var ?bool $deleteBranchOnMerge
     */
	#[\JMS\Serializer\Annotation\SerializedName('delete_branch_on_merge')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $deleteBranchOnMerge = null;
    
    /**
     * A short description of the repository.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * Either `true` to enable issues for this repository or `false` to disable them.
     * 
     * @var ?bool $hasIssues
     */
	#[\JMS\Serializer\Annotation\SerializedName('has_issues')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $hasIssues = null;
    
    /**
     * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
     * 
     * @var ?bool $hasProjects
     */
	#[\JMS\Serializer\Annotation\SerializedName('has_projects')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $hasProjects = null;
    
    /**
     * Either `true` to enable the wiki for this repository or `false` to disable it.
     * 
     * @var ?bool $hasWiki
     */
	#[\JMS\Serializer\Annotation\SerializedName('has_wiki')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $hasWiki = null;
    
    /**
     * A URL with more information about the repository.
     * 
     * @var ?string $homepage
     */
	#[\JMS\Serializer\Annotation\SerializedName('homepage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $homepage = null;
    
    /**
     * Either `true` to make this repo available as a template repository or `false` to prevent it.
     * 
     * @var ?bool $isTemplate
     */
	#[\JMS\Serializer\Annotation\SerializedName('is_template')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isTemplate = null;
    
    /**
     * The default value for a merge commit message.
     * 
     * 
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyMergeCommitMessageEnum $mergeCommitMessage
     */
	#[\JMS\Serializer\Annotation\SerializedName('merge_commit_message')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyMergeCommitMessageEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReposUpdateRequestBodyMergeCommitMessageEnum $mergeCommitMessage = null;
    
    /**
     * The default value for a merge commit title.
     * 
     * 
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyMergeCommitTitleEnum $mergeCommitTitle
     */
	#[\JMS\Serializer\Annotation\SerializedName('merge_commit_title')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyMergeCommitTitleEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReposUpdateRequestBodyMergeCommitTitleEnum $mergeCommitTitle = null;
    
    /**
     * The name of the repository.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Either `true` to make the repository private or `false` to make it public. Default: `false`.  
     * 
     * **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/enterprise-server@3.5/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
     * 
     * @var ?bool $private
     */
	#[\JMS\Serializer\Annotation\SerializedName('private')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $private = null;
    
    /**
     * The default value for a squash merge commit message:
     * 
     * 
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodySquashMergeCommitMessageEnum $squashMergeCommitMessage
     */
	#[\JMS\Serializer\Annotation\SerializedName('squash_merge_commit_message')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodySquashMergeCommitMessageEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReposUpdateRequestBodySquashMergeCommitMessageEnum $squashMergeCommitMessage = null;
    
    /**
     * The default value for a squash merge commit title:
     * 
     * 
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodySquashMergeCommitTitleEnum $squashMergeCommitTitle
     */
	#[\JMS\Serializer\Annotation\SerializedName('squash_merge_commit_title')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodySquashMergeCommitTitleEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReposUpdateRequestBodySquashMergeCommitTitleEnum $squashMergeCommitTitle = null;
    
    /**
     * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
     * 
     * @var ?bool $useSquashPrTitleAsDefault
     */
	#[\JMS\Serializer\Annotation\SerializedName('use_squash_pr_title_as_default')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $useSquashPrTitleAsDefault = null;
    
    /**
     * The visibility of the repository.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyVisibilityEnum $visibility
     */
	#[\JMS\Serializer\Annotation\SerializedName('visibility')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ReposUpdateRequestBodyVisibilityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReposUpdateRequestBodyVisibilityEnum $visibility = null;
    
	public function __construct()
	{
		$this->allowForking = null;
		$this->allowMergeCommit = null;
		$this->allowRebaseMerge = null;
		$this->allowSquashMerge = null;
		$this->allowUpdateBranch = null;
		$this->archived = null;
		$this->defaultBranch = null;
		$this->deleteBranchOnMerge = null;
		$this->description = null;
		$this->hasIssues = null;
		$this->hasProjects = null;
		$this->hasWiki = null;
		$this->homepage = null;
		$this->isTemplate = null;
		$this->mergeCommitMessage = null;
		$this->mergeCommitTitle = null;
		$this->name = null;
		$this->private = null;
		$this->squashMergeCommitMessage = null;
		$this->squashMergeCommitTitle = null;
		$this->useSquashPrTitleAsDefault = null;
		$this->visibility = null;
	}
}
