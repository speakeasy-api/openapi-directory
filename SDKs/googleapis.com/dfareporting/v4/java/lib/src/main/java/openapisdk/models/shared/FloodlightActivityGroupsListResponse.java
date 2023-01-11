package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightActivityGroupsListResponse
 * Floodlight Activity Group List Response
**/
public class FloodlightActivityGroupsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityGroups")
    public FloodlightActivityGroup[] floodlightActivityGroups;
    public FloodlightActivityGroupsListResponse withFloodlightActivityGroups(FloodlightActivityGroup[] floodlightActivityGroups) {
        this.floodlightActivityGroups = floodlightActivityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightActivityGroupsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public FloodlightActivityGroupsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}