package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentFilter
 * SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
**/
public class SegmentFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("not")
    public Boolean not;
    public SegmentFilter withNot(Boolean not) {
        this.not = not;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequenceSegment")
    public SequenceSegment sequenceSegment;
    public SegmentFilter withSequenceSegment(SequenceSegment sequenceSegment) {
        this.sequenceSegment = sequenceSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleSegment")
    public SimpleSegment simpleSegment;
    public SegmentFilter withSimpleSegment(SimpleSegment simpleSegment) {
        this.simpleSegment = simpleSegment;
        return this;
    }
}