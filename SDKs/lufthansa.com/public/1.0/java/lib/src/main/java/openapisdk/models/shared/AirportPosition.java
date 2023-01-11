package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirportPosition
 * Physical location of an airport. This data section is optional and therefore not always present.
**/
public class AirportPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Coordinate")
    public Coordinate coordinate;
    public AirportPosition withCoordinate(Coordinate coordinate) {
        this.coordinate = coordinate;
        return this;
    }
}