package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPublisherProfilesResponse
 * Response message for profiles visible to the buyer.
**/
public class ListPublisherProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPublisherProfilesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfiles")
    public PublisherProfile[] publisherProfiles;
    public ListPublisherProfilesResponse withPublisherProfiles(PublisherProfile[] publisherProfiles) {
        this.publisherProfiles = publisherProfiles;
        return this;
    }
}