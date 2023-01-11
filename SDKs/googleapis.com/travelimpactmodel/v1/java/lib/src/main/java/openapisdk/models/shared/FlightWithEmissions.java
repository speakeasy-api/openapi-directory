package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FlightWithEmissions
 * Direct flight with emission estimates.
**/
public class FlightWithEmissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emissionsGramsPerPax")
    public EmissionsGramsPerPax emissionsGramsPerPax;
    public FlightWithEmissions withEmissionsGramsPerPax(EmissionsGramsPerPax emissionsGramsPerPax) {
        this.emissionsGramsPerPax = emissionsGramsPerPax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flight")
    public Flight flight;
    public FlightWithEmissions withFlight(Flight flight) {
        this.flight = flight;
        return this;
    }
}