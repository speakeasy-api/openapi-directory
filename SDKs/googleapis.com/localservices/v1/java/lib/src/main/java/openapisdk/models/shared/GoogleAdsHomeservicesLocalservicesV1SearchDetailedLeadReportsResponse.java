package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
 * A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
public class GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailedLeadReports")
    public GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport[] detailedLeadReports;
    public GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse withDetailedLeadReports(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport[] detailedLeadReports) {
        this.detailedLeadReports = detailedLeadReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}