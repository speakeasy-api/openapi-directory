import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Changelogs represents a change made to a given agent.
 */
export declare class GoogleCloudDialogflowCxV3beta1Changelog extends SpeakeasyBase {
    /**
     * The action of the change.
     */
    action?: string;
    /**
     * The timestamp of the change.
     */
    createTime?: string;
    /**
     * The affected resource display name of the change.
     */
    displayName?: string;
    /**
     * The unique identifier of the changelog. Format: `projects//locations//agents//changelogs/`.
     */
    name?: string;
    /**
     * The affected resource name of the change.
     */
    resource?: string;
    /**
     * The affected resource type.
     */
    type?: string;
    /**
     * Email address of the authenticated user.
     */
    userEmail?: string;
}
