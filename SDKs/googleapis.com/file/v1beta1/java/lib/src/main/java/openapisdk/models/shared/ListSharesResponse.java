package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSharesResponse
 * ListSharesResponse is the result of ListSharesRequest.
**/
public class ListSharesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSharesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shares")
    public Share[] shares;
    public ListSharesResponse withShares(Share[] shares) {
        this.shares = shares;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListSharesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}