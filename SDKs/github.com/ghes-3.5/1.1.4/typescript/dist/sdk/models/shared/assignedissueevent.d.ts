import { SpeakeasyBase } from "../../../internal/utils";
import { Integration } from "./integration";
import { SimpleUser } from "./simpleuser";
/**
 * Assigned Issue Event
 */
export declare class AssignedIssueEvent extends SpeakeasyBase {
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
    performedViaGithubApp: Integration;
    url: string;
}
