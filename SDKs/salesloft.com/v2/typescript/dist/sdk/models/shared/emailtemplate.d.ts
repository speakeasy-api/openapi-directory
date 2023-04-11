import { SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplateCounts } from "./emailtemplatecounts";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class EmailTemplate extends SpeakeasyBase {
    /**
     * Links to attachments and tags resources for this email template.
     */
    links?: Record<string, any>;
    /**
     * Datetime of when the email template was archived, if archived
     */
    archivedAt?: Date;
    /**
     * Sanitized body of the email template without email signature
     */
    body?: string;
    /**
     * A plain text version of the first 100 characters of the body of the email template
     */
    bodyPreview?: string;
    /**
     * Whether this email template is only used on a cadence step. These templates are not visible in the SalesLoft application template list. If false, this email template is visible in the SalesLoft application, and may be used when composing an email or creating a cadence step.
     */
    cadenceTemplate?: boolean;
    /**
     * Whether click tracking is enabled for this email template
     */
    clickTrackingEnabled?: boolean;
    counts?: EmailTemplateCounts;
    /**
     * Datetime of when the email template was created
     */
    createdAt?: Date;
    /**
     * Groups to which this template is assigned, if any
     */
    groups?: EmbeddedResource[];
    /**
     * ID of email template
     */
    id?: number;
    /**
     * Datetime of when the email template was last used
     */
    lastUsedAt?: Date;
    /**
     * Whether open tracking is enabled for this email template
     */
    openTrackingEnabled?: boolean;
    /**
     * Whether this email template is visible to team members (shared)
     */
    shared?: boolean;
    /**
     * Subject of the email template
     */
    subject?: string;
    /**
     * All tags applied to this email template
     */
    tags?: string[];
    teamTemplate?: EmbeddedResource;
    templateOwner?: EmbeddedResource;
    /**
     * Title of the email template
     */
    title?: string;
    /**
     * Datetime of when the email template was last updated
     */
    updatedAt?: Date;
}
