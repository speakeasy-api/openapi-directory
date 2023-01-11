package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
 * A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
public class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountReports")
    public GoogleAdsHomeservicesLocalservicesV1AccountReport[] accountReports;
    public GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse withAccountReports(GoogleAdsHomeservicesLocalservicesV1AccountReport[] accountReports) {
        this.accountReports = accountReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}