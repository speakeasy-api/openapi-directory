package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeGroupsListResponse
 * Creative Group List Response
**/
public class CreativeGroupsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeGroups")
    public CreativeGroup[] creativeGroups;
    public CreativeGroupsListResponse withCreativeGroups(CreativeGroup[] creativeGroups) {
        this.creativeGroups = creativeGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CreativeGroupsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CreativeGroupsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}