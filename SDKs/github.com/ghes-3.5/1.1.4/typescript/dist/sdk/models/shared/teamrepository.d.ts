import { SpeakeasyBase } from "../../../internal/utils";
import { NullableLicenseSimple } from "./nullablelicensesimple";
import { NullableRepository } from "./nullablerepository";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class TeamRepositoryPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
/**
 * A team's access to a repository.
 */
export declare class TeamRepository extends SpeakeasyBase {
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
    owner: NullableSimpleUser;
    permissions?: TeamRepositoryPermissions;
    /**
     * Whether the repository is private or public.
     */
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    roleName?: string;
    size: number;
    sshUrl: string;
    stargazersCount: number;
    stargazersUrl: string;
    statusesUrl: string;
    subscribersCount?: number;
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
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    watchers: number;
    watchersCount: number;
}
