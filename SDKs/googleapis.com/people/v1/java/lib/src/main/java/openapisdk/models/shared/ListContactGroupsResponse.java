package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListContactGroupsResponse
 * The response to a list contact groups request.
**/
public class ListContactGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroups")
    public ContactGroup[] contactGroups;
    public ListContactGroupsResponse withContactGroups(ContactGroup[] contactGroups) {
        this.contactGroups = contactGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListContactGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextSyncToken")
    public String nextSyncToken;
    public ListContactGroupsResponse withNextSyncToken(String nextSyncToken) {
        this.nextSyncToken = nextSyncToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Integer totalItems;
    public ListContactGroupsResponse withTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}