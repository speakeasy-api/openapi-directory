import { SpeakeasyBase } from "../../../internal/utils";
import { NullableLicenseSimple } from "./nullablelicensesimple";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SearchResultTextMatches } from "./searchresulttextmatches";
export declare class RepoSearchResultItemPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
/**
 * Repo Search Result Item
 */
export declare class RepoSearchResultItem extends SpeakeasyBase {
    allowAutoMerge?: boolean;
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
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl: string;
    name: string;
    nodeId: string;
    notificationsUrl: string;
    openIssues: number;
    openIssuesCount: number;
    /**
     * A GitHub user.
     */
    owner: NullableSimpleUser;
    permissions?: RepoSearchResultItemPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    score: number;
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
    textMatches?: SearchResultTextMatches[];
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
    webCommitSignoffRequired?: boolean;
}
