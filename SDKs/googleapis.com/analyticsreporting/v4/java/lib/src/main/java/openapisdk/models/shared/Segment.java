package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Segment
 * The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.
**/
public class Segment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicSegment")
    public DynamicSegment dynamicSegment;
    public Segment withDynamicSegment(DynamicSegment dynamicSegment) {
        this.dynamicSegment = dynamicSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentId")
    public String segmentId;
    public Segment withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}