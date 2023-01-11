package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudEssentialcontactsV1ListContactsResponse
 * Response message for the ListContacts method.
**/
public class GoogleCloudEssentialcontactsV1ListContactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public GoogleCloudEssentialcontactsV1Contact[] contacts;
    public GoogleCloudEssentialcontactsV1ListContactsResponse withContacts(GoogleCloudEssentialcontactsV1Contact[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudEssentialcontactsV1ListContactsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}