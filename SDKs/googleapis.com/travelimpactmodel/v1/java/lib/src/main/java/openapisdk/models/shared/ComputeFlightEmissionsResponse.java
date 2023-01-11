package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeFlightEmissionsResponse
 * Output definition for the ComputeFlightEmissions response.
**/
public class ComputeFlightEmissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightEmissions")
    public FlightWithEmissions[] flightEmissions;
    public ComputeFlightEmissionsResponse withFlightEmissions(FlightWithEmissions[] flightEmissions) {
        this.flightEmissions = flightEmissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelVersion")
    public ModelVersion modelVersion;
    public ComputeFlightEmissionsResponse withModelVersion(ModelVersion modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
}