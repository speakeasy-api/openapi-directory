package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudEssentialcontactsV1ComputeContactsResponse
 * Response message for the ComputeContacts method.
**/
public class GoogleCloudEssentialcontactsV1ComputeContactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public GoogleCloudEssentialcontactsV1Contact[] contacts;
    public GoogleCloudEssentialcontactsV1ComputeContactsResponse withContacts(GoogleCloudEssentialcontactsV1Contact[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudEssentialcontactsV1ComputeContactsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}