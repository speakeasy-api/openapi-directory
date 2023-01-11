package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetLocationsResponse
 * Response message for Locations.BatchGetLocations.
**/
public class BatchGetLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public Location[] locations;
    public BatchGetLocationsResponse withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
}