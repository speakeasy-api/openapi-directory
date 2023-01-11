package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGroupsResponse
 * The ListGroups response.
**/
public class ListGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Group[] group;
    public ListGroupsResponse withGroup(Group[] group) {
        this.group = group;
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