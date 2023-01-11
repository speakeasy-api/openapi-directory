package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateReachableRangePostDataParametersAvoidAreasRectangles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("northEastCorner")
    public CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner northEastCorner;
    public CalculateReachableRangePostDataParametersAvoidAreasRectangles withNorthEastCorner(CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner northEastCorner) {
        this.northEastCorner = northEastCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("southWestCorner")
    public CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner southWestCorner;
    public CalculateReachableRangePostDataParametersAvoidAreasRectangles withSouthWestCorner(CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner southWestCorner) {
        this.southWestCorner = southWestCorner;
        return this;
    }
}