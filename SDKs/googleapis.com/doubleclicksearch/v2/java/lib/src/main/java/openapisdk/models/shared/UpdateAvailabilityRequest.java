package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAvailabilityRequest
 * The request to update availability.
**/
public class UpdateAvailabilityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilities")
    public Availability[] availabilities;
    public UpdateAvailabilityRequest withAvailabilities(Availability[] availabilities) {
        this.availabilities = availabilities;
        return this;
    }
}