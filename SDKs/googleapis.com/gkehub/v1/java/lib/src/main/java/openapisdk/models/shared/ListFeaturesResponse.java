package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFeaturesResponse
 * Response message for the `GkeHub.ListFeatures` method.
**/
public class ListFeaturesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFeaturesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public Feature[] resources;
    public ListFeaturesResponse withResources(Feature[] resources) {
        this.resources = resources;
        return this;
    }
}