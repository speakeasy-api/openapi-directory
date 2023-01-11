package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListAccountsResponse
 * Request message for ListAccounts RPC.
**/
public class GoogleAnalyticsAdminV1betaListAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public GoogleAnalyticsAdminV1betaAccount[] accounts;
    public GoogleAnalyticsAdminV1betaListAccountsResponse withAccounts(GoogleAnalyticsAdminV1betaAccount[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListAccountsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}