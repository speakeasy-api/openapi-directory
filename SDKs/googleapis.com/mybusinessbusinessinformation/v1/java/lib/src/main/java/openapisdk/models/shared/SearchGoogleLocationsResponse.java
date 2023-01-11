package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchGoogleLocationsResponse
 * Response message for GoogleLocations.SearchGoogleLocations.
**/
public class SearchGoogleLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleLocations")
    public GoogleLocation[] googleLocations;
    public SearchGoogleLocationsResponse withGoogleLocations(GoogleLocation[] googleLocations) {
        this.googleLocations = googleLocations;
        return this;
    }
}