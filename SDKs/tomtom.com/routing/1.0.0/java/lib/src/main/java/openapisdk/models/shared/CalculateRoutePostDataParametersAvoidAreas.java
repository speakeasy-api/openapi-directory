package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateRoutePostDataParametersAvoidAreas {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rectangles")
    public CalculateRoutePostDataParametersAvoidAreasRectangles[] rectangles;
    public CalculateRoutePostDataParametersAvoidAreas withRectangles(CalculateRoutePostDataParametersAvoidAreasRectangles[] rectangles) {
        this.rectangles = rectangles;
        return this;
    }
}