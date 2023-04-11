import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { SimpleUser } from "./simpleuser";
/**
 * Unassigned Issue Event
 */
export declare class UnassignedIssueEvent extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    actor: SimpleUser;
    /**
     * A GitHub user.
     */
    assignee: SimpleUser;
    /**
     * A GitHub user.
     */
    assigner: SimpleUser;
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
    url: string;
}
