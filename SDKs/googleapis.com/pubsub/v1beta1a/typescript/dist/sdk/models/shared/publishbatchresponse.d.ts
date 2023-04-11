import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the PublishBatch method.
 */
export declare class PublishBatchResponse extends SpeakeasyBase {
    /**
     * The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic.
     */
    messageIds?: string[];
}
