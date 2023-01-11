package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse
 * Response message for ListGoogleAdsLinks RPC.
**/
public class GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAdsLinks")
    public GoogleAnalyticsAdminV1betaGoogleAdsLink[] googleAdsLinks;
    public GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse withGoogleAdsLinks(GoogleAnalyticsAdminV1betaGoogleAdsLink[] googleAdsLinks) {
        this.googleAdsLinks = googleAdsLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}