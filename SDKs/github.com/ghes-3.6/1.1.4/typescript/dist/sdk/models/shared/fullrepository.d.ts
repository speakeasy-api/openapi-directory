import { SpeakeasyBase } from "../../../internal/utils";
import { CodeOfConductSimple } from "./codeofconductsimple";
import { NullableLicenseSimple } from "./nullablelicensesimple";
import { NullableRepository } from "./nullablerepository";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Repository } from "./repository";
import { SecurityAndAnalysis } from "./securityandanalysis";
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
export declare enum FullRepositoryMergeCommitMessageEnum {
    PrBody = "PR_BODY",
    PrTitle = "PR_TITLE",
    Blank = "BLANK"
}
/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 *   - `PR_TITLE` - default to the pull request's title.
 *   - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
export declare enum FullRepositoryMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    MergeMessage = "MERGE_MESSAGE"
}
export declare class FullRepositoryPermissions extends SpeakeasyBase {
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
export declare enum FullRepositorySquashMergeCommitMessageEnum {
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
export declare enum FullRepositorySquashMergeCommitTitleEnum {
    PrTitle = "PR_TITLE",
    CommitOrPrTitle = "COMMIT_OR_PR_TITLE"
}
/**
 * Full Repository
 */
export declare class FullRepository extends SpeakeasyBase {
    allowAutoMerge?: boolean;
    allowForking?: boolean;
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    allowUpdateBranch?: boolean;
    /**
     * Whether anonymous git access is allowed.
     */
    anonymousAccessEnabled?: boolean;
    archiveUrl: string;
    archived: boolean;
    assigneesUrl: string;
    blobsUrl: string;
    branchesUrl: string;
    cloneUrl: string;
    /**
     * Code of Conduct Simple
     */
    codeOfConduct?: CodeOfConductSimple;
    collaboratorsUrl: string;
    commentsUrl: string;
    commitsUrl: string;
    compareUrl: string;
    contentsUrl: string;
    contributorsUrl: string;
    createdAt: Date;
    defaultBranch: string;
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
    hasDownloads: boolean;
    hasIssues: boolean;
    hasPages: boolean;
    hasProjects: boolean;
    hasWiki: boolean;
    homepage: string;
    hooksUrl: string;
    htmlUrl: string;
    id: number;
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
    mergeCommitMessage?: FullRepositoryMergeCommitMessageEnum;
    /**
     * The default value for a merge commit title.
     *
     * @remarks
     *
     *   - `PR_TITLE` - default to the pull request's title.
     *   - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    mergeCommitTitle?: FullRepositoryMergeCommitTitleEnum;
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl: string;
    name: string;
    networkCount: number;
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
    /**
     * A repository on GitHub.
     */
    parent?: Repository;
    permissions?: FullRepositoryPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    securityAndAnalysis?: SecurityAndAnalysis;
    /**
     * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
     */
    size: number;
    /**
     * A repository on GitHub.
     */
    source?: Repository;
    /**
     * The default value for a squash merge commit message:
     *
     * @remarks
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squashMergeCommitMessage?: FullRepositorySquashMergeCommitMessageEnum;
    /**
     * The default value for a squash merge commit title:
     *
     * @remarks
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squashMergeCommitTitle?: FullRepositorySquashMergeCommitTitleEnum;
    sshUrl: string;
    stargazersCount: number;
    stargazersUrl: string;
    statusesUrl: string;
    subscribersCount: number;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl: string;
    tagsUrl: string;
    teamsUrl: string;
    tempCloneToken?: string;
    /**
     * A repository on GitHub.
     */
    templateRepository?: NullableRepository;
    topics?: string[];
    treesUrl: string;
    updatedAt: Date;
    url: string;
    useSquashPrTitleAsDefault?: boolean;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    watchers: number;
    watchersCount: number;
    webCommitSignoffRequired?: boolean;
}
