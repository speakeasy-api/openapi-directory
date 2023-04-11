import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1FeedbackMessage } from "./googleclouddatalabelingv1beta1feedbackmessage";
/**
 * Results for listing FeedbackMessages.
 */
export declare class GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse extends SpeakeasyBase {
    /**
     * The list of feedback messages to return.
     */
    feedbackMessages?: GoogleCloudDatalabelingV1beta1FeedbackMessage[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
