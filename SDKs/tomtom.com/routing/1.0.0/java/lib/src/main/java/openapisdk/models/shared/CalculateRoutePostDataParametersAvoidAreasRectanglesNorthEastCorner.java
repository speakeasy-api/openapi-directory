package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public String latitude;
    public CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public String longitude;
    public CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
}