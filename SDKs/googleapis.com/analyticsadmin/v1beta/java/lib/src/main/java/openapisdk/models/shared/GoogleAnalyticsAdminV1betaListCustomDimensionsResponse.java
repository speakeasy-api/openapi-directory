package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListCustomDimensionsResponse
 * Response message for ListCustomDimensions RPC.
**/
public class GoogleAnalyticsAdminV1betaListCustomDimensionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDimensions")
    public GoogleAnalyticsAdminV1betaCustomDimension[] customDimensions;
    public GoogleAnalyticsAdminV1betaListCustomDimensionsResponse withCustomDimensions(GoogleAnalyticsAdminV1betaCustomDimension[] customDimensions) {
        this.customDimensions = customDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListCustomDimensionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}