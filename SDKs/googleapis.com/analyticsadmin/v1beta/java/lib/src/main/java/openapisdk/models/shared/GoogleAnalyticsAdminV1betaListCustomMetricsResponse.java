package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListCustomMetricsResponse
 * Response message for ListCustomMetrics RPC.
**/
public class GoogleAnalyticsAdminV1betaListCustomMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customMetrics")
    public GoogleAnalyticsAdminV1betaCustomMetric[] customMetrics;
    public GoogleAnalyticsAdminV1betaListCustomMetricsResponse withCustomMetrics(GoogleAnalyticsAdminV1betaCustomMetric[] customMetrics) {
        this.customMetrics = customMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListCustomMetricsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}