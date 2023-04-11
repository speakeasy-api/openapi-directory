import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { AutoMerge } from "./automerge";
import { Link } from "./link";
import { NullableLicenseSimple } from "./nullablelicensesimple";
import { NullableMilestone } from "./nullablemilestone";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SimpleUser } from "./simpleuser";
import { TeamSimple } from "./teamsimple";
export declare class PullRequestLinks extends SpeakeasyBase {
    /**
     * Hypermedia Link
     */
    comments: Link;
    /**
     * Hypermedia Link
     */
    commits: Link;
    /**
     * Hypermedia Link
     */
    html: Link;
    /**
     * Hypermedia Link
     */
    issue: Link;
    /**
     * Hypermedia Link
     */
    reviewComment: Link;
    /**
     * Hypermedia Link
     */
    reviewComments: Link;
    /**
     * Hypermedia Link
     */
    self: Link;
    /**
     * Hypermedia Link
     */
    statuses: Link;
}
export declare class PullRequestBaseRepoOwner extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare class PullRequestBaseRepoPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
export declare class PullRequestBaseRepo extends SpeakeasyBase {
    allowForking?: boolean;
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    archiveUrl: string;
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
    defaultBranch: string;
    deploymentsUrl: string;
    description: string;
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
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl: string;
    name: string;
    nodeId: string;
    notificationsUrl: string;
    openIssues: number;
    openIssuesCount: number;
    owner: PullRequestBaseRepoOwner;
    permissions?: PullRequestBaseRepoPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    size: number;
    sshUrl: string;
    stargazersCount: number;
    stargazersUrl: string;
    statusesUrl: string;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl: string;
    tagsUrl: string;
    teamsUrl: string;
    tempCloneToken?: string;
    topics?: string[];
    treesUrl: string;
    updatedAt: Date;
    url: string;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    watchers: number;
    watchersCount: number;
}
export declare class PullRequestBaseUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare class PullRequestBase extends SpeakeasyBase {
    label: string;
    ref: string;
    repo: PullRequestBaseRepo;
    sha: string;
    user: PullRequestBaseUser;
}
export declare class PullRequestHeadRepoLicense extends SpeakeasyBase {
    key: string;
    name: string;
    nodeId: string;
    spdxId: string;
    url: string;
}
export declare class PullRequestHeadRepoOwner extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare class PullRequestHeadRepoPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
export declare class PullRequestHeadRepo extends SpeakeasyBase {
    allowForking?: boolean;
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    archiveUrl: string;
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
    defaultBranch: string;
    deploymentsUrl: string;
    description: string;
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
    license: PullRequestHeadRepoLicense;
    masterBranch?: string;
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl: string;
    name: string;
    nodeId: string;
    notificationsUrl: string;
    openIssues: number;
    openIssuesCount: number;
    owner: PullRequestHeadRepoOwner;
    permissions?: PullRequestHeadRepoPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    size: number;
    sshUrl: string;
    stargazersCount: number;
    stargazersUrl: string;
    statusesUrl: string;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl: string;
    tagsUrl: string;
    teamsUrl: string;
    tempCloneToken?: string;
    topics?: string[];
    treesUrl: string;
    updatedAt: Date;
    url: string;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    watchers: number;
    watchersCount: number;
}
export declare class PullRequestHeadUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare class PullRequestHead extends SpeakeasyBase {
    label: string;
    ref: string;
    repo: PullRequestHeadRepo;
    sha: string;
    user: PullRequestHeadUser;
}
export declare class PullRequestLabels extends SpeakeasyBase {
    color: string;
    default: boolean;
    description: string;
    id: number;
    name: string;
    nodeId: string;
    url: string;
}
/**
 * State of this Pull Request. Either `open` or `closed`.
 */
export declare enum PullRequestStateEnum {
    Open = "open",
    Closed = "closed"
}
/**
 * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
 */
export declare class PullRequest extends SpeakeasyBase {
    links: PullRequestLinks;
    activeLockReason?: string;
    additions: number;
    /**
     * Simple User
     */
    assignee: NullableSimpleUser;
    assignees?: SimpleUser[];
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    /**
     * The status of auto merging a pull request.
     */
    autoMerge: AutoMerge;
    base: PullRequestBase;
    body: string;
    changedFiles: number;
    closedAt: Date;
    comments: number;
    commentsUrl: string;
    commits: number;
    commitsUrl: string;
    createdAt: Date;
    deletions: number;
    diffUrl: string;
    /**
     * Indicates whether or not the pull request is a draft.
     */
    draft?: boolean;
    head: PullRequestHead;
    htmlUrl: string;
    id: number;
    issueUrl: string;
    labels: PullRequestLabels[];
    locked: boolean;
    /**
     * Indicates whether maintainers can modify the pull request.
     */
    maintainerCanModify: boolean;
    mergeCommitSha: string;
    mergeable: boolean;
    mergeableState: string;
    merged: boolean;
    mergedAt: Date;
    /**
     * Simple User
     */
    mergedBy: NullableSimpleUser;
    /**
     * A collection of related issues and pull requests.
     */
    milestone: NullableMilestone;
    nodeId: string;
    /**
     * Number uniquely identifying the pull request within its repository.
     */
    number: number;
    patchUrl: string;
    rebaseable?: boolean;
    requestedReviewers?: SimpleUser[];
    requestedTeams?: TeamSimple[];
    reviewCommentUrl: string;
    reviewComments: number;
    reviewCommentsUrl: string;
    /**
     * State of this Pull Request. Either `open` or `closed`.
     */
    state: PullRequestStateEnum;
    statusesUrl: string;
    /**
     * The title of the pull request.
     */
    title: string;
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
