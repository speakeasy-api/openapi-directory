import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { SimpleUser } from "./simpleuser";
export declare class UnlabeledIssueEventLabel extends SpeakeasyBase {
    color: string;
    name: string;
}
/**
 * Unlabeled Issue Event
 */
export declare class UnlabeledIssueEvent extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    actor: SimpleUser;
    commitId: string;
    commitUrl: string;
    createdAt: string;
    event: string;
    id: number;
    label: UnlabeledIssueEventLabel;
    nodeId: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp: NullableIntegration;
    url: string;
}
