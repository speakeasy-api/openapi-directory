package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateReachableRangePostDataParametersAvoidAreas {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rectangles")
    public CalculateReachableRangePostDataParametersAvoidAreasRectangles[] rectangles;
    public CalculateReachableRangePostDataParametersAvoidAreas withRectangles(CalculateReachableRangePostDataParametersAvoidAreasRectangles[] rectangles) {
        this.rectangles = rectangles;
        return this;
    }
}