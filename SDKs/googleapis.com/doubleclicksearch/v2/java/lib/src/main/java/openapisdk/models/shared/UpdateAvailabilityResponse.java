package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAvailabilityResponse
 * The response to a update availability request.
**/
public class UpdateAvailabilityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilities")
    public Availability[] availabilities;
    public UpdateAvailabilityResponse withAvailabilities(Availability[] availabilities) {
        this.availabilities = availabilities;
        return this;
    }
}