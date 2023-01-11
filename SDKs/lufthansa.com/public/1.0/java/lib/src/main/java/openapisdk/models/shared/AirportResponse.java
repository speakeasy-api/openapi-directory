package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AirportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AirportResource")
    public AirportResource airportResource;
    public AirportResponse withAirportResource(AirportResource airportResource) {
        this.airportResource = airportResource;
        return this;
    }
}