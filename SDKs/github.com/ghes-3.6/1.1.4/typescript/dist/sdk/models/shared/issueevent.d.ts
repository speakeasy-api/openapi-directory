import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { IssueEventDismissedReview } from "./issueeventdismissedreview";
import { IssueEventLabel } from "./issueeventlabel";
import { IssueEventMilestone } from "./issueeventmilestone";
import { IssueEventProjectCard } from "./issueeventprojectcard";
import { IssueEventRename } from "./issueeventrename";
import { NullableIntegration } from "./nullableintegration";
import { NullableIssue } from "./nullableissue";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Team } from "./team";
/**
 * Issue Event
 */
export declare class IssueEvent extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    actor: NullableSimpleUser;
    /**
     * A GitHub user.
     */
    assignee?: NullableSimpleUser;
    /**
     * A GitHub user.
     */
    assigner?: NullableSimpleUser;
    /**
     * How the author is associated with the repository.
     */
    authorAssociation?: AuthorAssociationEnum;
    commitId: string;
    commitUrl: string;
    createdAt: Date;
    dismissedReview?: IssueEventDismissedReview;
    event: string;
    id: number;
    /**
     * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
     */
    issue?: NullableIssue;
    /**
     * Issue Event Label
     */
    label?: IssueEventLabel;
    lockReason?: string;
    /**
     * Issue Event Milestone
     */
    milestone?: IssueEventMilestone;
    nodeId: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp?: NullableIntegration;
    /**
     * Issue Event Project Card
     */
    projectCard?: IssueEventProjectCard;
    /**
     * Issue Event Rename
     */
    rename?: IssueEventRename;
    /**
     * A GitHub user.
     */
    requestedReviewer?: NullableSimpleUser;
    /**
     * Groups of organization members that gives permissions on specified repositories.
     */
    requestedTeam?: Team;
    /**
     * A GitHub user.
     */
    reviewRequester?: NullableSimpleUser;
    url: string;
}
