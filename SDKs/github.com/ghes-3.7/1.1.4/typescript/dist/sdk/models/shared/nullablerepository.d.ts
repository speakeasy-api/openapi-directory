import { SpeakeasyBase } from "../../../internal/utils";
import { NullableLicenseSimple } from "./nullablelicensesimple";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SimpleUser } from "./simpleuser";
/**
 * The default value for a merge commit message.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum NullableRepositoryMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    PrTitle = "PR_TITLE",
    Blank = "BLANK"
}
/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
export declare enum NullableRepositoryMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    MergeMessage = "MERGE_MESSAGE"
}
export declare class NullableRepositoryPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
/**
 * The default value for a squash merge commit message:
 *
 * @remarks
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum NullableRepositorySquashMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    CommitMessages = "COMMIT_MESSAGES",
    Blank = "BLANK"
}
/**
 * The default value for a squash merge commit title:
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
export declare enum NullableRepositorySquashMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    CommitOrPrTitle = "COMMIT_OR_PR_TITLE"
}
/**
 * The default value for a merge commit message.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum NullableRepositoryTemplateRepositoryMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    PrTitle = "PR_TITLE",
    Blank = "BLANK"
}
/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
export declare enum NullableRepositoryTemplateRepositoryMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    MergeMessage = "MERGE_MESSAGE"
}
export declare class NullableRepositoryTemplateRepositoryOwner extends SpeakeasyBase {
    avatarUrl?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    htmlUrl?: string;
    id?: number;
    login?: string;
    nodeId?: string;
    organizationsUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    siteAdmin?: boolean;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
export declare class NullableRepositoryTemplateRepositoryPermissions extends SpeakeasyBase {
    admin?: boolean;
    maintain?: boolean;
    pull?: boolean;
    push?: boolean;
    triage?: boolean;
}
/**
 * The default value for a squash merge commit message:
 *
 * @remarks
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
export declare enum NullableRepositoryTemplateRepositorySquashMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    CommitMessages = "COMMIT_MESSAGES",
    Blank = "BLANK"
}
/**
 * The default value for a squash merge commit title:
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
export declare enum NullableRepositoryTemplateRepositorySquashMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    CommitOrPrTitle = "COMMIT_OR_PR_TITLE"
}
export declare class NullableRepositoryTemplateRepository extends SpeakeasyBase {
    allowAutoMerge?: boolean;
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    allowUpdateBranch?: boolean;
    archiveUrl?: string;
    archived?: boolean;
    assigneesUrl?: string;
    blobsUrl?: string;
    branchesUrl?: string;
    cloneUrl?: string;
    collaboratorsUrl?: string;
    commentsUrl?: string;
    commitsUrl?: string;
    compareUrl?: string;
    contentsUrl?: string;
    contributorsUrl?: string;
    createdAt?: string;
    defaultBranch?: string;
    deleteBranchOnMerge?: boolean;
    deploymentsUrl?: string;
    description?: string;
    disabled?: boolean;
    downloadsUrl?: string;
    eventsUrl?: string;
    fork?: boolean;
    forksCount?: number;
    forksUrl?: string;
    fullName?: string;
    gitCommitsUrl?: string;
    gitRefsUrl?: string;
    gitTagsUrl?: string;
    gitUrl?: string;
    hasDownloads?: boolean;
    hasIssues?: boolean;
    hasPages?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    hooksUrl?: string;
    htmlUrl?: string;
    id?: number;
    isTemplate?: boolean;
    issueCommentUrl?: string;
    issueEventsUrl?: string;
    issuesUrl?: string;
    keysUrl?: string;
    labelsUrl?: string;
    language?: string;
    languagesUrl?: string;
    /**
     * The default value for a merge commit message.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    mergeCommitMessage?: NullableRepositoryTemplateRepositoryMergeCommitMessageEnum;
    /**
     * The default value for a merge commit title.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    mergeCommitTitle?: NullableRepositoryTemplateRepositoryMergeCommitTitleEnum;
    mergesUrl?: string;
    milestonesUrl?: string;
    mirrorUrl?: string;
    name?: string;
    networkCount?: number;
    nodeId?: string;
    notificationsUrl?: string;
    openIssuesCount?: number;
    owner?: NullableRepositoryTemplateRepositoryOwner;
    permissions?: NullableRepositoryTemplateRepositoryPermissions;
    private?: boolean;
    pullsUrl?: string;
    pushedAt?: string;
    releasesUrl?: string;
    size?: number;
    /**
     * The default value for a squash merge commit message:
     *
     * @remarks
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squashMergeCommitMessage?: NullableRepositoryTemplateRepositorySquashMergeCommitMessageEnum;
    /**
     * The default value for a squash merge commit title:
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squashMergeCommitTitle?: NullableRepositoryTemplateRepositorySquashMergeCommitTitleEnum;
    sshUrl?: string;
    stargazersCount?: number;
    stargazersUrl?: string;
    statusesUrl?: string;
    subscribersCount?: number;
    subscribersUrl?: string;
    subscriptionUrl?: string;
    svnUrl?: string;
    tagsUrl?: string;
    teamsUrl?: string;
    tempCloneToken?: string;
    topics?: string[];
    treesUrl?: string;
    updatedAt?: string;
    url?: string;
    useSquashPrTitleAsDefault?: boolean;
    visibility?: string;
    watchersCount?: number;
}
/**
 * A repository on GitHub.
 */
export declare class NullableRepository extends SpeakeasyBase {
    /**
     * Whether to allow Auto-merge to be used on pull requests.
     */
    allowAutoMerge?: boolean;
    /**
     * Whether to allow forking this repo
     */
    allowForking?: boolean;
    /**
     * Whether to allow merge commits for pull requests.
     */
    allowMergeCommit?: boolean;
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allowRebaseMerge?: boolean;
    /**
     * Whether to allow squash merges for pull requests.
     */
    allowSquashMerge?: boolean;
    /**
     * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
     */
    allowUpdateBranch?: boolean;
    /**
     * Whether anonymous git access is enabled for this repository
     */
    anonymousAccessEnabled?: boolean;
    archiveUrl: string;
    /**
     * Whether the repository is archived.
     */
    archived: boolean;
    assigneesUrl: string;
    blobsUrl: string;
    branchesUrl: string;
    cloneUrl: string;
    collaboratorsUrl: string;
    commentsUrl: string;
    commitsUrl: string;
    compareUrl: string;
    contentsUrl: string;
    contributorsUrl: string;
    createdAt: Date;
    /**
     * The default branch of the repository.
     */
    defaultBranch: string;
    /**
     * Whether to delete head branches when pull requests are merged
     */
    deleteBranchOnMerge?: boolean;
    deploymentsUrl: string;
    description: string;
    /**
     * Returns whether or not this repository disabled.
     */
    disabled: boolean;
    downloadsUrl: string;
    eventsUrl: string;
    fork: boolean;
    forks: number;
    forksCount: number;
    forksUrl: string;
    fullName: string;
    gitCommitsUrl: string;
    gitRefsUrl: string;
    gitTagsUrl: string;
    gitUrl: string;
    /**
     * Whether discussions are enabled.
     */
    hasDiscussions?: boolean;
    /**
     * Whether downloads are enabled.
     */
    hasDownloads: boolean;
    /**
     * Whether issues are enabled.
     */
    hasIssues: boolean;
    hasPages: boolean;
    /**
     * Whether projects are enabled.
     */
    hasProjects: boolean;
    /**
     * Whether the wiki is enabled.
     */
    hasWiki: boolean;
    homepage: string;
    hooksUrl: string;
    htmlUrl: string;
    /**
     * Unique identifier of the repository
     */
    id: number;
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    isTemplate?: boolean;
    issueCommentUrl: string;
    issueEventsUrl: string;
    issuesUrl: string;
    keysUrl: string;
    labelsUrl: string;
    language: string;
    languagesUrl: string;
    /**
     * License Simple
     */
    license: NullableLicenseSimple;
    masterBranch?: string;
    /**
     * The default value for a merge commit message.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    mergeCommitMessage?: NullableRepositoryMergeCommitMessageEnum;
    /**
     * The default value for a merge commit title.
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    mergeCommitTitle?: NullableRepositoryMergeCommitTitleEnum;
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl: string;
    /**
     * The name of the repository.
     */
    name: string;
    networkCount?: number;
    nodeId: string;
    notificationsUrl: string;
    openIssues: number;
    openIssuesCount: number;
    /**
     * A GitHub user.
     */
    organization?: NullableSimpleUser;
    /**
     * A GitHub user.
     */
    owner: SimpleUser;
    permissions?: NullableRepositoryPermissions;
    /**
     * Whether the repository is private or public.
     */
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    /**
     * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
     */
    size: number;
    /**
     * The default value for a squash merge commit message:
     *
     * @remarks
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squashMergeCommitMessage?: NullableRepositorySquashMergeCommitMessageEnum;
    /**
     * The default value for a squash merge commit title:
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squashMergeCommitTitle?: NullableRepositorySquashMergeCommitTitleEnum;
    sshUrl: string;
    stargazersCount: number;
    stargazersUrl: string;
    starredAt?: string;
    statusesUrl: string;
    subscribersCount?: number;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl: string;
    tagsUrl: string;
    teamsUrl: string;
    tempCloneToken?: string;
    templateRepository?: NullableRepositoryTemplateRepository;
    topics?: string[];
    treesUrl: string;
    updatedAt: Date;
    url: string;
    /**
     * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
     */
    useSquashPrTitleAsDefault?: boolean;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    watchers: number;
    watchersCount: number;
    /**
     * Whether to require contributors to sign off on web-based commits
     */
    webCommitSignoffRequired?: boolean;
}
