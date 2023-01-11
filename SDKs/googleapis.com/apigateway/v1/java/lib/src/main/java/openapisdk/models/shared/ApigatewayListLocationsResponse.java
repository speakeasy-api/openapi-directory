package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayListLocationsResponse
 * The response message for Locations.ListLocations.
**/
public class ApigatewayListLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public ApigatewayLocation[] locations;
    public ApigatewayListLocationsResponse withLocations(ApigatewayLocation[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ApigatewayListLocationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}