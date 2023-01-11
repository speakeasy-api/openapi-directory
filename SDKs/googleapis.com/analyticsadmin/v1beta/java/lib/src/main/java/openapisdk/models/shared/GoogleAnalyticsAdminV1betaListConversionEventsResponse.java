package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListConversionEventsResponse
 * Response message for ListConversionEvents RPC.
**/
public class GoogleAnalyticsAdminV1betaListConversionEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionEvents")
    public GoogleAnalyticsAdminV1betaConversionEvent[] conversionEvents;
    public GoogleAnalyticsAdminV1betaListConversionEventsResponse withConversionEvents(GoogleAnalyticsAdminV1betaConversionEvent[] conversionEvents) {
        this.conversionEvents = conversionEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListConversionEventsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}