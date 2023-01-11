package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAdminClusterMembershipsResponse
 * Response message for the `GkeHub.ListAdminClusterMemberships` method.
**/
public class ListAdminClusterMembershipsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminClusterMemberships")
    public Membership[] adminClusterMemberships;
    public ListAdminClusterMembershipsResponse withAdminClusterMemberships(Membership[] adminClusterMemberships) {
        this.adminClusterMemberships = adminClusterMemberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAdminClusterMembershipsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListAdminClusterMembershipsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}