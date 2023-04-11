import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the settings for Cloud audit logging
 */
export declare class AuditLoggingSettings extends SpeakeasyBase {
    /**
     * Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc.
     */
    logAdminReadActions?: boolean;
    /**
     * Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc.
     */
    logDataReadActions?: boolean;
    /**
     * Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc.
     */
    logDataWriteActions?: boolean;
    /**
     * The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id}
     */
    project?: string;
}
