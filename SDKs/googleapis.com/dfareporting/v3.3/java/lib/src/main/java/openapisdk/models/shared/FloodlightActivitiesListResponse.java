package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightActivitiesListResponse
 * Floodlight Activity List Response
**/
public class FloodlightActivitiesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivities")
    public FloodlightActivity[] floodlightActivities;
    public FloodlightActivitiesListResponse withFloodlightActivities(FloodlightActivity[] floodlightActivities) {
        this.floodlightActivities = floodlightActivities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightActivitiesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public FloodlightActivitiesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}