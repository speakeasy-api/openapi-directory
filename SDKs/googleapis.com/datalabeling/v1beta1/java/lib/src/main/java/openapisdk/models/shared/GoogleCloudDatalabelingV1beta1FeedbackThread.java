package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1FeedbackThread
 * A feedback thread of a certain labeling task on a certain annotated dataset.
**/
public class GoogleCloudDatalabelingV1beta1FeedbackThread {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedbackThreadMetadata")
    public GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata feedbackThreadMetadata;
    public GoogleCloudDatalabelingV1beta1FeedbackThread withFeedbackThreadMetadata(GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata feedbackThreadMetadata) {
        this.feedbackThreadMetadata = feedbackThreadMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1FeedbackThread withName(String name) {
        this.name = name;
        return this;
    }
}