import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { SimpleUser } from "./simpleuser";
export declare class DemilestonedIssueEventMilestone extends SpeakeasyBase {
    title: string;
}
/**
 * Demilestoned Issue Event
 */
export declare class DemilestonedIssueEvent extends SpeakeasyBase {
    /**
     * Simple User
     */
    actor: SimpleUser;
    commitId: string;
    commitUrl: string;
    createdAt: string;
    event: string;
    id: number;
    milestone: DemilestonedIssueEventMilestone;
    nodeId: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp: NullableIntegration;
    url: string;
}
