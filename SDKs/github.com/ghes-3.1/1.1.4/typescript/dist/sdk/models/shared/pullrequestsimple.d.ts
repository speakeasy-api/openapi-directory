import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { AutoMerge } from "./automerge";
import { Link } from "./link";
import { NullableMilestone } from "./nullablemilestone";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Repository } from "./repository";
import { SimpleUser } from "./simpleuser";
import { Team } from "./team";
export declare class PullRequestSimpleLinks extends SpeakeasyBase {
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
export declare class PullRequestSimpleBase extends SpeakeasyBase {
    label: string;
    ref: string;
    /**
     * A git repository
     */
    repo: Repository;
    sha: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
export declare class PullRequestSimpleHead extends SpeakeasyBase {
    label: string;
    ref: string;
    /**
     * A git repository
     */
    repo: Repository;
    sha: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
export declare class PullRequestSimpleLabels extends SpeakeasyBase {
    color: string;
    default: boolean;
    description: string;
    id: number;
    name: string;
    nodeId: string;
    url: string;
}
/**
 * Pull Request Simple
 */
export declare class PullRequestSimple extends SpeakeasyBase {
    links: PullRequestSimpleLinks;
    activeLockReason?: string;
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
    base: PullRequestSimpleBase;
    body: string;
    closedAt: Date;
    commentsUrl: string;
    commitsUrl: string;
    createdAt: Date;
    diffUrl: string;
    /**
     * Indicates whether or not the pull request is a draft.
     */
    draft?: boolean;
    head: PullRequestSimpleHead;
    htmlUrl: string;
    id: number;
    issueUrl: string;
    labels: PullRequestSimpleLabels[];
    locked: boolean;
    mergeCommitSha: string;
    mergedAt: Date;
    /**
     * A collection of related issues and pull requests.
     */
    milestone: NullableMilestone;
    nodeId: string;
    number: number;
    patchUrl: string;
    requestedReviewers?: SimpleUser[];
    requestedTeams?: Team[];
    reviewCommentUrl: string;
    reviewCommentsUrl: string;
    state: string;
    statusesUrl: string;
    title: string;
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
