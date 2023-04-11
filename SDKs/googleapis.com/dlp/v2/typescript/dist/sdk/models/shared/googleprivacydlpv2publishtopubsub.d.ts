import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk
 */
export declare class GooglePrivacyDlpV2PublishToPubSub extends SpeakeasyBase {
    /**
     * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
     */
    topic?: string;
}
