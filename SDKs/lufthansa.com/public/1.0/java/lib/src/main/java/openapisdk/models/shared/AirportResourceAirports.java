package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirportResourceAirports
 * Container for airport elements.
**/
public class AirportResourceAirports {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Airport")
    public Airport airport;
    public AirportResourceAirports withAirport(Airport airport) {
        this.airport = airport;
        return this;
    }
}