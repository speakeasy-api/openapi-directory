package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPublisherAccountsResponse
 * Response for the publisher account list request.
**/
public class ListPublisherAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public PublisherAccount[] account;
    public ListPublisherAccountsResponse withAccount(PublisherAccount[] account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPublisherAccountsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}