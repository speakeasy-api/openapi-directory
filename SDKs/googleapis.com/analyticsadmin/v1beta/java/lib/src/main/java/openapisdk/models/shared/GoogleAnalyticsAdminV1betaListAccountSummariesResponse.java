package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListAccountSummariesResponse
 * Response message for ListAccountSummaries RPC.
**/
public class GoogleAnalyticsAdminV1betaListAccountSummariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountSummaries")
    public GoogleAnalyticsAdminV1betaAccountSummary[] accountSummaries;
    public GoogleAnalyticsAdminV1betaListAccountSummariesResponse withAccountSummaries(GoogleAnalyticsAdminV1betaAccountSummary[] accountSummaries) {
        this.accountSummaries = accountSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListAccountSummariesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}