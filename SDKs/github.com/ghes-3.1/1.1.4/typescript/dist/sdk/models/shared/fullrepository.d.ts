import { SpeakeasyBase } from "../../../internal/utils";
import { CodeOfConductSimple } from "./codeofconductsimple";
import { NullableLicenseSimple } from "./nullablelicensesimple";
import { NullableRepository } from "./nullablerepository";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Repository } from "./repository";
import { SimpleUser } from "./simpleuser";
export declare class FullRepositoryPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
/**
 * Full Repository
 */
export declare class FullRepository extends SpeakeasyBase {
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
     * Simple User
     */
    organization?: NullableSimpleUser;
    /**
     * Simple User
     */
    owner: SimpleUser;
    /**
     * A git repository
     */
    parent?: Repository;
    permissions?: FullRepositoryPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    size: number;
    /**
     * A git repository
     */
    source?: Repository;
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
     * A git repository
     */
    templateRepository?: NullableRepository;
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
