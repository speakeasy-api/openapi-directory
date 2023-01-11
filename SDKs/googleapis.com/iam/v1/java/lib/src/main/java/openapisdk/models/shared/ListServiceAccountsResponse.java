package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListServiceAccountsResponse
 * The service account list response.
**/
public class ListServiceAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public ServiceAccount[] accounts;
    public ListServiceAccountsResponse withAccounts(ServiceAccount[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListServiceAccountsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}