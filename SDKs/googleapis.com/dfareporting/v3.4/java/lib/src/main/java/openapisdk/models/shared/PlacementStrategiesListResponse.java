package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementStrategiesListResponse
 * Placement Strategy List Response
**/
public class PlacementStrategiesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlacementStrategiesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public PlacementStrategiesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategies")
    public PlacementStrategy[] placementStrategies;
    public PlacementStrategiesListResponse withPlacementStrategies(PlacementStrategy[] placementStrategies) {
        this.placementStrategies = placementStrategies;
        return this;
    }
}