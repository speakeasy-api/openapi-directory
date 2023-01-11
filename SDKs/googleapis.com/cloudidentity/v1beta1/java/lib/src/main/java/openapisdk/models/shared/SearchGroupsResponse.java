package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchGroupsResponse
 * The response message for GroupsService.SearchGroups.
**/
public class SearchGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public Group[] groups;
    public SearchGroupsResponse withGroups(Group[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}