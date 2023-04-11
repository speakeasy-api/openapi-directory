import { SpeakeasyBase } from "../../../internal/utils";
import { Integration } from "./integration";
import { SimpleUser } from "./simpleuser";
export declare class ConvertedNoteToIssueIssueEventProjectCard extends SpeakeasyBase {
    columnName: string;
    id: number;
    previousColumnName?: string;
    projectId: number;
    projectUrl: string;
    url: string;
}
/**
 * Converted Note to Issue Issue Event
 */
export declare class ConvertedNoteToIssueIssueEvent extends SpeakeasyBase {
    /**
     * A GitHub user.
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
    performedViaGithubApp: Integration;
    projectCard?: ConvertedNoteToIssueIssueEventProjectCard;
    url: string;
}
