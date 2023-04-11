import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceParameter } from "./datasourceparameter";
/**
 * Indicates the type of authorization.
 */
export declare enum DataSourceAuthorizationTypeEnum {
    AuthorizationTypeUnspecified = "AUTHORIZATION_TYPE_UNSPECIFIED",
    AuthorizationCode = "AUTHORIZATION_CODE",
    GooglePlusAuthorizationCode = "GOOGLE_PLUS_AUTHORIZATION_CODE",
    FirstPartyOauth = "FIRST_PARTY_OAUTH"
}
/**
 * Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically.
 */
export declare enum DataSourceDataRefreshTypeEnum {
    DataRefreshTypeUnspecified = "DATA_REFRESH_TYPE_UNSPECIFIED",
    SlidingWindow = "SLIDING_WINDOW",
    CustomSlidingWindow = "CUSTOM_SLIDING_WINDOW"
}
/**
 * Deprecated. This field has no effect.
 */
export declare enum DataSourceTransferTypeEnum {
    TransferTypeUnspecified = "TRANSFER_TYPE_UNSPECIFIED",
    Batch = "BATCH",
    Streaming = "STREAMING"
}
/**
 * Defines the properties and custom parameters for a data source.
 */
export declare class DataSource extends SpeakeasyBase {
    /**
     * Indicates the type of authorization.
     */
    authorizationType?: DataSourceAuthorizationTypeEnum;
    /**
     * Data source client id which should be used to receive refresh token.
     */
    clientId?: string;
    /**
     * Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically.
     */
    dataRefreshType?: DataSourceDataRefreshTypeEnum;
    /**
     * Data source id.
     */
    dataSourceId?: string;
    /**
     * Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
     */
    defaultDataRefreshWindowDays?: number;
    /**
     * Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.
     */
    defaultSchedule?: string;
    /**
     * User friendly data source description string.
     */
    description?: string;
    /**
     * User friendly data source name.
     */
    displayName?: string;
    /**
     * Url for the help document for this data source.
     */
    helpUrl?: string;
    /**
     * Disables backfilling and manual run scheduling for the data source.
     */
    manualRunsDisabled?: boolean;
    /**
     * The minimum interval for scheduler to schedule runs.
     */
    minimumScheduleInterval?: string;
    /**
     * Output only. Data source resource name.
     */
    name?: string;
    /**
     * Data source parameters.
     */
    parameters?: DataSourceParameter[];
    /**
     * Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery
     */
    scopes?: string[];
    /**
     * Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.
     */
    supportsCustomSchedule?: boolean;
    /**
     * Deprecated. This field has no effect.
     */
    supportsMultipleTransfers?: boolean;
    /**
     * Deprecated. This field has no effect.
     */
    transferType?: DataSourceTransferTypeEnum;
    /**
     * The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.
     */
    updateDeadlineSeconds?: number;
}
