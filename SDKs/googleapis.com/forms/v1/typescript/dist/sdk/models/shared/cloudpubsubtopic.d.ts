import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Pub/Sub topic.
 */
export declare class CloudPubsubTopic extends SpeakeasyBase {
    /**
     * Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub.
     */
    topicName?: string;
}
