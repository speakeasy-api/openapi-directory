package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1OperatorMetadata
 * General information useful for labels coming from contributors.
**/
public class GoogleCloudDatalabelingV1beta1OperatorMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String[] comments;
    public GoogleCloudDatalabelingV1beta1OperatorMetadata withComments(String[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelVotes")
    public Integer labelVotes;
    public GoogleCloudDatalabelingV1beta1OperatorMetadata withLabelVotes(Integer labelVotes) {
        this.labelVotes = labelVotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudDatalabelingV1beta1OperatorMetadata withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalVotes")
    public Integer totalVotes;
    public GoogleCloudDatalabelingV1beta1OperatorMetadata withTotalVotes(Integer totalVotes) {
        this.totalVotes = totalVotes;
        return this;
    }
}