package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListChildAccountsResponse
 * Response definition for the child account list rpc.
**/
public class ListChildAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public Account[] accounts;
    public ListChildAccountsResponse withAccounts(Account[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListChildAccountsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}