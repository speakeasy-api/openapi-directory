package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1TimeSegment
 * A time period inside of an example that has a time dimension (e.g. video).
**/
public class GoogleCloudDatalabelingV1beta1TimeSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeOffset")
    public String endTimeOffset;
    public GoogleCloudDatalabelingV1beta1TimeSegment withEndTimeOffset(String endTimeOffset) {
        this.endTimeOffset = endTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeOffset")
    public String startTimeOffset;
    public GoogleCloudDatalabelingV1beta1TimeSegment withStartTimeOffset(String startTimeOffset) {
        this.startTimeOffset = startTimeOffset;
        return this;
    }
}