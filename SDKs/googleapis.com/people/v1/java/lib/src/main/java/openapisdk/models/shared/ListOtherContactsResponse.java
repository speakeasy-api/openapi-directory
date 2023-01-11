package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOtherContactsResponse
 * The response to a request for the authenticated user's "Other contacts".
**/
public class ListOtherContactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListOtherContactsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextSyncToken")
    public String nextSyncToken;
    public ListOtherContactsResponse withNextSyncToken(String nextSyncToken) {
        this.nextSyncToken = nextSyncToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherContacts")
    public Person[] otherContacts;
    public ListOtherContactsResponse withOtherContacts(Person[] otherContacts) {
        this.otherContacts = otherContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListOtherContactsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}