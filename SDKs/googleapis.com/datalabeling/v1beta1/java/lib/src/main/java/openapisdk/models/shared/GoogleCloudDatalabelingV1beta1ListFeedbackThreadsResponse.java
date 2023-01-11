package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
 * Results for listing FeedbackThreads.
**/
public class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedbackThreads")
    public GoogleCloudDatalabelingV1beta1FeedbackThread[] feedbackThreads;
    public GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse withFeedbackThreads(GoogleCloudDatalabelingV1beta1FeedbackThread[] feedbackThreads) {
        this.feedbackThreads = feedbackThreads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}