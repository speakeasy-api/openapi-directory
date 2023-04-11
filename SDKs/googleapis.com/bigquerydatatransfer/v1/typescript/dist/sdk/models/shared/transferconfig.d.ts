import { SpeakeasyBase } from "../../../internal/utils";
import { EmailPreferences } from "./emailpreferences";
import { ScheduleOptions } from "./scheduleoptions";
import { UserInfo } from "./userinfo";
/**
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
 */
export declare class TransferConfigInput extends SpeakeasyBase {
    /**
     * The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.
     */
    dataRefreshWindowDays?: number;
    /**
     * Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list
     */
    dataSourceId?: string;
    /**
     * The BigQuery target dataset id.
     */
    destinationDatasetId?: string;
    /**
     * Is this config disabled. When set to true, no runs are scheduled for a given transfer.
     */
    disabled?: boolean;
    /**
     * User specified display name for the data transfer.
     */
    displayName?: string;
    /**
     * Represents preferences for sending email notifications for transfer run events.
     */
    emailPreferences?: EmailPreferences;
    /**
     * The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
     */
    name?: string;
    /**
     * Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`
     */
    notificationPubsubTopic?: string;
    /**
     * Information about a user.
     */
    ownerInfo?: UserInfo;
    /**
     * Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
     */
    params?: Record<string, any>;
    /**
     * Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.
     */
    schedule?: string;
    /**
     * Options customizing the data transfer schedule.
     */
    scheduleOptions?: ScheduleOptions;
    /**
     * Deprecated. Unique ID of the user on whose behalf transfer is done.
     */
    userId?: string;
}
/**
 * Output only. State of the most recently updated transfer run.
 */
export declare enum TransferConfigStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
 */
export declare class TransferConfig extends SpeakeasyBase {
    /**
     * The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.
     */
    dataRefreshWindowDays?: number;
    /**
     * Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list
     */
    dataSourceId?: string;
    /**
     * Output only. Region in which BigQuery dataset is located.
     */
    datasetRegion?: string;
    /**
     * The BigQuery target dataset id.
     */
    destinationDatasetId?: string;
    /**
     * Is this config disabled. When set to true, no runs are scheduled for a given transfer.
     */
    disabled?: boolean;
    /**
     * User specified display name for the data transfer.
     */
    displayName?: string;
    /**
     * Represents preferences for sending email notifications for transfer run events.
     */
    emailPreferences?: EmailPreferences;
    /**
     * The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
     */
    name?: string;
    /**
     * Output only. Next time when data transfer will run.
     */
    nextRunTime?: string;
    /**
     * Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`
     */
    notificationPubsubTopic?: string;
    /**
     * Information about a user.
     */
    ownerInfo?: UserInfo;
    /**
     * Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
     */
    params?: Record<string, any>;
    /**
     * Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.
     */
    schedule?: string;
    /**
     * Options customizing the data transfer schedule.
     */
    scheduleOptions?: ScheduleOptions;
    /**
     * Output only. State of the most recently updated transfer run.
     */
    state?: TransferConfigStateEnum;
    /**
     * Output only. Data transfer modification time. Ignored by server on input.
     */
    updateTime?: string;
    /**
     * Deprecated. Unique ID of the user on whose behalf transfer is done.
     */
    userId?: string;
}
