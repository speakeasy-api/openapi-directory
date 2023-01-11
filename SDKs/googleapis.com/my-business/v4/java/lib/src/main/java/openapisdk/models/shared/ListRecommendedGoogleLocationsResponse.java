package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRecommendedGoogleLocationsResponse
 * Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.
**/
public class ListRecommendedGoogleLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleLocations")
    public GoogleLocation[] googleLocations;
    public ListRecommendedGoogleLocationsResponse withGoogleLocations(GoogleLocation[] googleLocations) {
        this.googleLocations = googleLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRecommendedGoogleLocationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListRecommendedGoogleLocationsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}