package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentDefinition
 * SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
**/
public class SegmentDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentFilters")
    public SegmentFilter[] segmentFilters;
    public SegmentDefinition withSegmentFilters(SegmentFilter[] segmentFilters) {
        this.segmentFilters = segmentFilters;
        return this;
    }
}