package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGroupsResponse
 * The response message for GroupsService.ListGroups.
**/
public class ListGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public Group[] groups;
    public ListGroupsResponse withGroups(Group[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}