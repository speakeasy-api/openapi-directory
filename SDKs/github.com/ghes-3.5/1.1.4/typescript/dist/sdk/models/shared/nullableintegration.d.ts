import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 */
export declare class NullableIntegration extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    createdAt: Date;
    description: string;
    /**
     * The list of events for the GitHub app
     */
    events: string[];
    externalUrl: string;
    htmlUrl: string;
    /**
     * Unique identifier of the GitHub app
     */
    id: number;
    /**
     * The number of installations associated with the GitHub app
     */
    installationsCount?: number;
    /**
     * The name of the GitHub app
     */
    name: string;
    nodeId: string;
    /**
     * A GitHub user.
     */
    owner: NullableSimpleUser;
    pem?: string;
    /**
     * The set of permissions for the GitHub app
     */
    permissions: Record<string, string>;
    /**
     * The slug name of the GitHub app
     */
    slug?: string;
    updatedAt: Date;
    webhookSecret?: string;
}
