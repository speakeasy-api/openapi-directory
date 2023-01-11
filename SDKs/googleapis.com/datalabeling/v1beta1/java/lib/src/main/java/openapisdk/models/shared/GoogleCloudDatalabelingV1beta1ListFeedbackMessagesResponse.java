package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
 * Results for listing FeedbackMessages.
**/
public class GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedbackMessages")
    public GoogleCloudDatalabelingV1beta1FeedbackMessage[] feedbackMessages;
    public GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse withFeedbackMessages(GoogleCloudDatalabelingV1beta1FeedbackMessage[] feedbackMessages) {
        this.feedbackMessages = feedbackMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}