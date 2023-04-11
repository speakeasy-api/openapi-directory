import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
 */
export declare class PubsubTarget extends SpeakeasyBase {
    /**
     * Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.
     */
    attributes?: Record<string, string>;
    /**
     * The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.
     */
    data?: string;
    /**
     * Required. The name of the Cloud Pub/Sub topic to which messages will be published when a job is delivered. The topic name must be in the same format as required by Pub/Sub's [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest), for example `projects/PROJECT_ID/topics/TOPIC_ID`. The topic must be in the same project as the Cloud Scheduler job.
     */
    topicName?: string;
}
