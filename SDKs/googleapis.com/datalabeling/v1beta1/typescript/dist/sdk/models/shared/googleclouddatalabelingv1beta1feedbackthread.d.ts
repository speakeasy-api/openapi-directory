import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata } from "./googleclouddatalabelingv1beta1feedbackthreadmetadata";
/**
 * A feedback thread of a certain labeling task on a certain annotated dataset.
 */
export declare class GoogleCloudDatalabelingV1beta1FeedbackThread extends SpeakeasyBase {
    feedbackThreadMetadata?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata;
    /**
     * Name of the feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'
     */
    name?: string;
}
