import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { SimpleUser } from "./simpleuser";
import { Team } from "./team";
/**
 * Review Requested Issue Event
 */
export declare class ReviewRequestedIssueEvent extends SpeakeasyBase {
    /**
     * Simple User
     */
    actor: SimpleUser;
    commitId: string;
    commitUrl: string;
    createdAt: string;
    event: string;
    id: number;
    nodeId: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp: NullableIntegration;
    /**
     * Simple User
     */
    requestedReviewer?: SimpleUser;
    /**
     * Groups of organization members that gives permissions on specified repositories.
     */
    requestedTeam?: Team;
    /**
     * Simple User
     */
    reviewRequester: SimpleUser;
    url: string;
}
