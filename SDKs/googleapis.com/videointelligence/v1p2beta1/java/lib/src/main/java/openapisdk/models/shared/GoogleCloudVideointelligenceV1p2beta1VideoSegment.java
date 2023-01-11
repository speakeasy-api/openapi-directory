package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p2beta1VideoSegment
 * Video segment.
**/
public class GoogleCloudVideointelligenceV1p2beta1VideoSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeOffset")
    public String endTimeOffset;
    public GoogleCloudVideointelligenceV1p2beta1VideoSegment withEndTimeOffset(String endTimeOffset) {
        this.endTimeOffset = endTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeOffset")
    public String startTimeOffset;
    public GoogleCloudVideointelligenceV1p2beta1VideoSegment withStartTimeOffset(String startTimeOffset) {
        this.startTimeOffset = startTimeOffset;
        return this;
    }
}