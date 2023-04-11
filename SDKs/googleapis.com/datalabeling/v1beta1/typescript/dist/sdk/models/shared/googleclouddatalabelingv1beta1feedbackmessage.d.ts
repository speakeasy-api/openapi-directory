import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A feedback message inside a feedback thread.
 */
export declare class GoogleCloudDatalabelingV1beta1FeedbackMessage extends SpeakeasyBase {
    /**
     * String content of the feedback. Maximum of 10000 characters.
     */
    body?: string;
    /**
     * Create time.
     */
    createTime?: string;
    /**
     * The image storing this feedback if the feedback is an image representing operator's comments.
     */
    image?: string;
    /**
     * Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}'
     */
    name?: string;
    /**
     * Metadata describing the feedback from the operator.
     */
    operatorFeedbackMetadata?: Record<string, any>;
    /**
     * Metadata describing the feedback from the labeling task requester.
     */
    requesterFeedbackMetadata?: Record<string, any>;
}
