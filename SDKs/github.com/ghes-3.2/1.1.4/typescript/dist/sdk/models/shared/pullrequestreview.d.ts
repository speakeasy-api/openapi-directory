import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class PullRequestReviewLinksHtml extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewLinksPullRequest extends SpeakeasyBase {
    href: string;
}
export declare class PullRequestReviewLinks extends SpeakeasyBase {
    html: PullRequestReviewLinksHtml;
    pullRequest: PullRequestReviewLinksPullRequest;
}
/**
 * Pull Request Reviews are reviews on pull requests.
 */
export declare class PullRequestReview extends SpeakeasyBase {
    links: PullRequestReviewLinks;
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
    user: NullableSimpleUser;
}
