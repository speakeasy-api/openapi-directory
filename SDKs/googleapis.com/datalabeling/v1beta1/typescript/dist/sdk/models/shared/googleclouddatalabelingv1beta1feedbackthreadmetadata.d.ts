import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum {
    FeedbackThreadStatusUnspecified = "FEEDBACK_THREAD_STATUS_UNSPECIFIED",
    New = "NEW",
    Replied = "REPLIED"
}
export declare class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata extends SpeakeasyBase {
    /**
     * When the thread is created
     */
    createTime?: string;
    /**
     * When the thread is last updated.
     */
    lastUpdateTime?: string;
    status?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum;
    /**
     * An image thumbnail of this thread.
     */
    thumbnail?: string;
}
