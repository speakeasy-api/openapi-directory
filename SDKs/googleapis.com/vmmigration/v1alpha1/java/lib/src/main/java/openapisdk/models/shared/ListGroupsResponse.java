package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGroupsResponse
 * Response message for 'ListGroups' request.
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListGroupsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}