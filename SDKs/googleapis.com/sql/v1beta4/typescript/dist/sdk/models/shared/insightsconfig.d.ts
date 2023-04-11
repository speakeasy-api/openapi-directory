import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
 */
export declare class InsightsConfig extends SpeakeasyBase {
    /**
     * Whether Query Insights feature is enabled.
     */
    queryInsightsEnabled?: boolean;
    /**
     * Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.
     */
    queryPlansPerMinute?: number;
    /**
     * Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.
     */
    queryStringLength?: number;
    /**
     * Whether Query Insights will record application tags from query when enabled.
     */
    recordApplicationTags?: boolean;
    /**
     * Whether Query Insights will record client address when enabled.
     */
    recordClientAddress?: boolean;
}
