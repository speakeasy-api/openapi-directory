package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EstimationTimePoint
 * Represents a point in time.
**/
public class EstimationTimePoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimationTimeFrameOffset")
    public String estimationTimeFrameOffset;
    public EstimationTimePoint withEstimationTimeFrameOffset(String estimationTimeFrameOffset) {
        this.estimationTimeFrameOffset = estimationTimeFrameOffset;
        return this;
    }
}