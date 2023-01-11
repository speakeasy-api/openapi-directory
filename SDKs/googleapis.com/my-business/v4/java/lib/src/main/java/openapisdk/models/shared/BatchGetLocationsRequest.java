package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetLocationsRequest
 * Request message for Locations.BatchGetLocations.
**/
public class BatchGetLocationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationNames")
    public String[] locationNames;
    public BatchGetLocationsRequest withLocationNames(String[] locationNames) {
        this.locationNames = locationNames;
        return this;
    }
}