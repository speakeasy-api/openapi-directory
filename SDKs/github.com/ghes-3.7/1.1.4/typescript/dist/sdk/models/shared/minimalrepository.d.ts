import { SpeakeasyBase } from "../../../internal/utils";
import { CodeOfConduct } from "./codeofconduct";
import { SimpleUser } from "./simpleuser";
export declare class MinimalRepositoryLicense extends SpeakeasyBase {
    key?: string;
    name?: string;
    nodeId?: string;
    spdxId?: string;
    url?: string;
}
export declare class MinimalRepositoryPermissions extends SpeakeasyBase {
    admin?: boolean;
    maintain?: boolean;
    pull?: boolean;
    push?: boolean;
    triage?: boolean;
}
/**
 * Minimal Repository
 */
export declare class MinimalRepository extends SpeakeasyBase {
    allowForking?: boolean;
    archiveUrl: string;
    archived?: boolean;
    assigneesUrl: string;
    blobsUrl: string;
    branchesUrl: string;
    cloneUrl?: string;
    /**
     * Code Of Conduct
     */
    codeOfConduct?: CodeOfConduct;
    collaboratorsUrl: string;
    commentsUrl: string;
    commitsUrl: string;
    compareUrl: string;
    contentsUrl: string;
    contributorsUrl: string;
    createdAt?: Date;
    defaultBranch?: string;
    deleteBranchOnMerge?: boolean;
    deploymentsUrl: string;
    description: string;
    disabled?: boolean;
    downloadsUrl: string;
    eventsUrl: string;
    fork: boolean;
    forks?: number;
    forksCount?: number;
    forksUrl: string;
    fullName: string;
    gitCommitsUrl: string;
    gitRefsUrl: string;
    gitTagsUrl: string;
    gitUrl?: string;
    hasDiscussions?: boolean;
    hasDownloads?: boolean;
    hasIssues?: boolean;
    hasPages?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    hooksUrl: string;
    htmlUrl: string;
    id: number;
    isTemplate?: boolean;
    issueCommentUrl: string;
    issueEventsUrl: string;
    issuesUrl: string;
    keysUrl: string;
    labelsUrl: string;
    language?: string;
    languagesUrl: string;
    license?: MinimalRepositoryLicense;
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl?: string;
    name: string;
    networkCount?: number;
    nodeId: string;
    notificationsUrl: string;
    openIssues?: number;
    openIssuesCount?: number;
    /**
     * A GitHub user.
     */
    owner: SimpleUser;
    permissions?: MinimalRepositoryPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt?: Date;
    releasesUrl: string;
    roleName?: string;
    /**
     * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
     */
    size?: number;
    sshUrl?: string;
    stargazersCount?: number;
    stargazersUrl: string;
    statusesUrl: string;
    subscribersCount?: number;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl?: string;
    tagsUrl: string;
    teamsUrl: string;
    tempCloneToken?: string;
    topics?: string[];
    treesUrl: string;
    updatedAt?: Date;
    url: string;
    visibility?: string;
    watchers?: number;
    watchersCount?: number;
    webCommitSignoffRequired?: boolean;
}
