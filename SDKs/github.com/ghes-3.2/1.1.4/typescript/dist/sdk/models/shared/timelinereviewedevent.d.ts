import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { SimpleUser } from "./simpleuser";
export declare class TimelineReviewedEventLinksHtml extends SpeakeasyBase {
    href: string;
}
export declare class TimelineReviewedEventLinksPullRequest extends SpeakeasyBase {
    href: string;
}
export declare class TimelineReviewedEventLinks extends SpeakeasyBase {
    html: TimelineReviewedEventLinksHtml;
    pullRequest: TimelineReviewedEventLinksPullRequest;
}
/**
 * Timeline Reviewed Event
 */
export declare class TimelineReviewedEvent extends SpeakeasyBase {
    links: TimelineReviewedEventLinks;
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    /**
     * The text of the review.
     */
    body: string;
    bodyHtml?: string;
    bodyText?: string;
    /**
     * A commit SHA for the review.
     */
    commitId: string;
    event: string;
    htmlUrl: string;
    /**
     * Unique identifier of the review
     */
    id: number;
    nodeId: string;
    pullRequestUrl: string;
    state: string;
    submittedAt?: Date;
    /**
     * Simple User
     */
    user: SimpleUser;
}
