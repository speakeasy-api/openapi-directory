package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLocationsResponse
 * Response message for Locations.ListLocations.
**/
public class ListLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public Location[] locations;
    public ListLocationsResponse withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLocationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListLocationsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}