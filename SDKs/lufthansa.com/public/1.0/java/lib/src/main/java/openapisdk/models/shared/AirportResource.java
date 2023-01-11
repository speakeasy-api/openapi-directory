package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirportResource
 * Root element of airport response.
**/
public class AirportResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Airports")
    public AirportResourceAirports airports;
    public AirportResource withAirports(AirportResourceAirports airports) {
        this.airports = airports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Meta")
    public AirportResourceMeta meta;
    public AirportResource withMeta(AirportResourceMeta meta) {
        this.meta = meta;
        return this;
    }
}