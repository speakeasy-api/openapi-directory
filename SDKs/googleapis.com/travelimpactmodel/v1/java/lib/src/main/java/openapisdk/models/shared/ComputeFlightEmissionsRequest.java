package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeFlightEmissionsRequest
 * Input definition for the ComputeFlightEmissions request.
**/
public class ComputeFlightEmissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flights")
    public Flight[] flights;
    public ComputeFlightEmissionsRequest withFlights(Flight[] flights) {
        this.flights = flights;
        return this;
    }
}