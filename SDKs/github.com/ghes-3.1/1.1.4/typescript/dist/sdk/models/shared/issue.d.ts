import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { NullableIntegration } from "./nullableintegration";
import { NullableMilestone } from "./nullablemilestone";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { ReactionRollup } from "./reactionrollup";
import { Repository } from "./repository";
import { SimpleUser } from "./simpleuser";
export declare class IssueLabels2 extends SpeakeasyBase {
    color?: string;
    default?: boolean;
    description?: string;
    id?: number;
    name?: string;
    nodeId?: string;
    url?: string;
}
export declare class IssuePullRequest extends SpeakeasyBase {
    diffUrl: string;
    htmlUrl: string;
    mergedAt?: Date;
    patchUrl: string;
    url: string;
}
/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
 */
export declare class Issue extends SpeakeasyBase {
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
     * Contents of the issue
     */
    body?: string;
    bodyHtml?: string;
    bodyText?: string;
    closedAt: Date;
    /**
     * Simple User
     */
    closedBy?: NullableSimpleUser;
    comments: number;
    commentsUrl: string;
    createdAt: Date;
    draft?: boolean;
    eventsUrl: string;
    htmlUrl: string;
    id: number;
    /**
     * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
     */
    labels: any[];
    labelsUrl: string;
    locked: boolean;
    /**
     * A collection of related issues and pull requests.
     */
    milestone: NullableMilestone;
    nodeId: string;
    /**
     * Number uniquely identifying the issue within its repository
     */
    number: number;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp?: NullableIntegration;
    pullRequest?: IssuePullRequest;
    reactions?: ReactionRollup;
    /**
     * A git repository
     */
    repository?: Repository;
    repositoryUrl: string;
    /**
     * State of the issue; either 'open' or 'closed'
     */
    state: string;
    /**
     * The reason for the current state
     */
    stateReason?: string;
    timelineUrl?: string;
    /**
     * Title of the issue
     */
    title: string;
    updatedAt: Date;
    /**
     * URL for the issue
     */
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
