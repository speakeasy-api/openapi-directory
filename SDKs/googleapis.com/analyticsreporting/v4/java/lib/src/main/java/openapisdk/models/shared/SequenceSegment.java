package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SequenceSegment
 * Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.
**/
public class SequenceSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstStepShouldMatchFirstHit")
    public Boolean firstStepShouldMatchFirstHit;
    public SequenceSegment withFirstStepShouldMatchFirstHit(Boolean firstStepShouldMatchFirstHit) {
        this.firstStepShouldMatchFirstHit = firstStepShouldMatchFirstHit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentSequenceSteps")
    public SegmentSequenceStep[] segmentSequenceSteps;
    public SequenceSegment withSegmentSequenceSteps(SegmentSequenceStep[] segmentSequenceSteps) {
        this.segmentSequenceSteps = segmentSequenceSteps;
        return this;
    }
}