package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateTime")
    public String lastUpdateTime;
    public GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata withLastUpdateTime(String lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum status;
    public GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata withStatus(GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
}