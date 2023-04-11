import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. The format of the payload that would be sent. If not specified the format will be JSON.
 */
export declare enum CloudPubsubTopicPayloadFormatEnum {
    PayloadFormatUnspecified = "PAYLOAD_FORMAT_UNSPECIFIED",
    Json = "JSON"
}
/**
 * A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
 */
export declare class CloudPubsubTopic extends SpeakeasyBase {
    /**
     * Optional. The format of the payload that would be sent. If not specified the format will be JSON.
     */
    payloadFormat?: CloudPubsubTopicPayloadFormatEnum;
    /**
     * The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
     */
    topicName?: string;
}
