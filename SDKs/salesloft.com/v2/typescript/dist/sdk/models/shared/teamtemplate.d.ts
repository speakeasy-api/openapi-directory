import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
import { TeamTemplateCounts } from "./teamtemplatecounts";
/**
 * Success
 */
export declare class TeamTemplate extends SpeakeasyBase {
    /**
     * Links to attachments resource for this template
     */
    links?: Record<string, any>;
    /**
     * Datetime of when the team template was archived, if archived
     */
    archivedAt?: Date;
    /**
     * Body of the team template
     */
    body?: string;
    /**
     * A plain text version of the first 100 characters of the body of the team template
     */
    bodyPreview?: string;
    /**
     * Whether click tracking is enabled for this team template
     */
    clickTrackingEnabled?: boolean;
    counts?: TeamTemplateCounts;
    /**
     * Datetime of when the team template was created
     */
    createdAt?: Date;
    /**
     * ID of team template
     */
    id?: string;
    /**
     * Datetime of when the team template was last modified
     */
    lastModifiedAt?: Date;
    lastModifiedUser?: EmbeddedResource;
    /**
     * Datetime of when the team template was last used
     */
    lastUsedAt?: Date;
    /**
     * Whether open tracking is enabled for this team template
     */
    openTrackingEnabled?: boolean;
    /**
     * Subject of the team template
     */
    subject?: string;
    /**
     * All tags applied to this team template
     */
    tags?: string[];
    /**
     * Title of the team template
     */
    title?: string;
    /**
     * Datetime of when the team template was last updated
     */
    updatedAt?: Date;
}
