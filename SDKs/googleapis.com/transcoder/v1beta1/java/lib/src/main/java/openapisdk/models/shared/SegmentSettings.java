package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentSettings
 * Segment settings for `"ts"`, `"fmp4"` and `"vtt"`.
**/
public class SegmentSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualSegments")
    public Boolean individualSegments;
    public SegmentSettings withIndividualSegments(Boolean individualSegments) {
        this.individualSegments = individualSegments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentDuration")
    public String segmentDuration;
    public SegmentSettings withSegmentDuration(String segmentDuration) {
        this.segmentDuration = segmentDuration;
        return this;
    }
}