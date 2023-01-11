package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public String latitude;
    public CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public String longitude;
    public CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
}