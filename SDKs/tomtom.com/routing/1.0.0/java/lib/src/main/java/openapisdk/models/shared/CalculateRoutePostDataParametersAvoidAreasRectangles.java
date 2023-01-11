package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateRoutePostDataParametersAvoidAreasRectangles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("northEastCorner")
    public CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner northEastCorner;
    public CalculateRoutePostDataParametersAvoidAreasRectangles withNorthEastCorner(CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner northEastCorner) {
        this.northEastCorner = northEastCorner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("southWestCorner")
    public CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner southWestCorner;
    public CalculateRoutePostDataParametersAvoidAreasRectangles withSouthWestCorner(CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner southWestCorner) {
        this.southWestCorner = southWestCorner;
        return this;
    }
}