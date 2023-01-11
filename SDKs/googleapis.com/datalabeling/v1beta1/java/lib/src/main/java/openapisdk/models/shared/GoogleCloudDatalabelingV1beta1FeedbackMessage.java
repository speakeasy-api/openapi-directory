package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1FeedbackMessage
 * A feedback message inside a feedback thread.
**/
public class GoogleCloudDatalabelingV1beta1FeedbackMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public GoogleCloudDatalabelingV1beta1FeedbackMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudDatalabelingV1beta1FeedbackMessage withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public GoogleCloudDatalabelingV1beta1FeedbackMessage withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1FeedbackMessage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatorFeedbackMetadata")
    public java.util.Map<String, Object> operatorFeedbackMetadata;
    public GoogleCloudDatalabelingV1beta1FeedbackMessage withOperatorFeedbackMetadata(java.util.Map<String, Object> operatorFeedbackMetadata) {
        this.operatorFeedbackMetadata = operatorFeedbackMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requesterFeedbackMetadata")
    public java.util.Map<String, Object> requesterFeedbackMetadata;
    public GoogleCloudDatalabelingV1beta1FeedbackMessage withRequesterFeedbackMetadata(java.util.Map<String, Object> requesterFeedbackMetadata) {
        this.requesterFeedbackMetadata = requesterFeedbackMetadata;
        return this;
    }
}