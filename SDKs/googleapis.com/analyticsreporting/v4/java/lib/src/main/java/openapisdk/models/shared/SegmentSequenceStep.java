package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentSequenceStep
 * A segment sequence definition.
**/
public class SegmentSequenceStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchType")
    public SegmentSequenceStepMatchTypeEnum matchType;
    public SegmentSequenceStep withMatchType(SegmentSequenceStepMatchTypeEnum matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orFiltersForSegment")
    public OrFiltersForSegment[] orFiltersForSegment;
    public SegmentSequenceStep withOrFiltersForSegment(OrFiltersForSegment[] orFiltersForSegment) {
        this.orFiltersForSegment = orFiltersForSegment;
        return this;
    }
}