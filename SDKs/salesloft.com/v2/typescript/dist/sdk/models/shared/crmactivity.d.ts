import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class CrmActivity extends SpeakeasyBase {
    /**
     * The type of activity that is being recorded, if available. The values can change over time, but could be one of: email, phone, email reminder, inmail
     */
    activityType?: string;
    /**
     * Datetime of when the crm activity was created
     */
    createdAt?: Date;
    /**
     * The ID of the activity in your CRM, if written to your CRM
     */
    crmId?: string;
    /**
     * Additional fields that are logged to your CRM, if mapped by the team at the time of writing to your CRM
     */
    customCrmFields?: Record<string, any>;
    /**
     * The description field of the activity in your CRM
     */
    description?: string;
    /**
     * Information about why this crm activity failed to sync, if it did fail to sync. Failed activities will be automatically retried and may become successful in the future
     */
    error?: string;
    /**
     * CrmActivity ID
     */
    id?: number;
    person?: EmbeddedResource;
    /**
     * The subject field of the activity in your CRM
     */
    subject?: string;
    /**
     * Datetime of when the crm activity was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}
