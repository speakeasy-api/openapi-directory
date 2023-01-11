package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAccountsResponse
 * Response definition for the account list rpc.
**/
public class ListAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public Account[] accounts;
    public ListAccountsResponse withAccounts(Account[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAccountsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}