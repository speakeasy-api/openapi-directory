import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Pub/Sub transport.
 */
export declare class PubsubInput extends SpeakeasyBase {
    /**
     * Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}`. You can set an existing topic for triggers of the type `google.cloud.pubsub.topic.v1.messagePublished`. The topic you provide here is not deleted by Eventarc at trigger deletion.
     */
    topic?: string;
}
/**
 * Represents a Pub/Sub transport.
 */
export declare class Pubsub extends SpeakeasyBase {
    /**
     * Output only. The name of the Pub/Sub subscription created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`.
     */
    subscription?: string;
    /**
     * Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}`. You can set an existing topic for triggers of the type `google.cloud.pubsub.topic.v1.messagePublished`. The topic you provide here is not deleted by Eventarc at trigger deletion.
     */
    topic?: string;
}
