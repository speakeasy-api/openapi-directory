import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
 */
export declare class CloudPubsubTopic extends SpeakeasyBase {
    /**
     * The `name` field of a Cloud Pub/Sub [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
     */
    topicName?: string;
}
