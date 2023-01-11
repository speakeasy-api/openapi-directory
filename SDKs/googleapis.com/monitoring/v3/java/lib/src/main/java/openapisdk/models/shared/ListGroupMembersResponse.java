package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGroupMembersResponse
 * The ListGroupMembers response.
**/
public class ListGroupMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public MonitoredResource[] members;
    public ListGroupMembersResponse withMembers(MonitoredResource[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGroupMembersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListGroupMembersResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}