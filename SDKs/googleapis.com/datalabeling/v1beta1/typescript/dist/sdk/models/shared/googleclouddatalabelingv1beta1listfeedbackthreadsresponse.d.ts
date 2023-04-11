import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1FeedbackThread } from "./googleclouddatalabelingv1beta1feedbackthread";
/**
 * Results for listing FeedbackThreads.
 */
export declare class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse extends SpeakeasyBase {
    /**
     * The list of feedback threads to return.
     */
    feedbackThreads?: GoogleCloudDatalabelingV1beta1FeedbackThread[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
