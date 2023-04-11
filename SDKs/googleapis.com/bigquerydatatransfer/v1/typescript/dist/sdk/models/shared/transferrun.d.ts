import { SpeakeasyBase } from "../../../internal/utils";
import { EmailPreferences } from "./emailpreferences";
import { Status } from "./status";
/**
 * Data transfer run state. Ignored for input requests.
 */
export declare enum TransferRunStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * Represents a data transfer run.
 */
export declare class TransferRun extends SpeakeasyBase {
    /**
     * Output only. Data source id.
     */
    dataSourceId?: string;
    /**
     * Output only. The BigQuery target dataset id.
     */
    destinationDatasetId?: string;
    /**
     * Represents preferences for sending email notifications for transfer run events.
     */
    emailPreferences?: EmailPreferences;
    /**
     * Output only. Time when transfer run ended. Parameter ignored by server for input requests.
     */
    endTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    errorStatus?: Status;
    /**
     * The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`. The name is ignored when creating a transfer run.
     */
    name?: string;
    /**
     * Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`
     */
    notificationPubsubTopic?: string;
    /**
     * Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
     */
    params?: Record<string, any>;
    /**
     * For batch transfer runs, specifies the date and time of the data should be ingested.
     */
    runTime?: string;
    /**
     * Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.
     */
    schedule?: string;
    /**
     * Minimum time after which a transfer run can be started.
     */
    scheduleTime?: string;
    /**
     * Output only. Time when transfer run was started. Parameter ignored by server for input requests.
     */
    startTime?: string;
    /**
     * Data transfer run state. Ignored for input requests.
     */
    state?: TransferRunStateEnum;
    /**
     * Output only. Last time the data transfer run state was updated.
     */
    updateTime?: string;
    /**
     * Deprecated. Unique ID of the user on whose behalf transfer is done.
     */
    userId?: string;
}
