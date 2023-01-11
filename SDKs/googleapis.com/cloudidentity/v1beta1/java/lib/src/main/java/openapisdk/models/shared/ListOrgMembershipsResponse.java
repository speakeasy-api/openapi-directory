package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOrgMembershipsResponse
 * The response message for OrgMembershipsService.ListOrgMemberships.
**/
public class ListOrgMembershipsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListOrgMembershipsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgMemberships")
    public OrgMembership[] orgMemberships;
    public ListOrgMembershipsResponse withOrgMemberships(OrgMembership[] orgMemberships) {
        this.orgMemberships = orgMemberships;
        return this;
    }
}