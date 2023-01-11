package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse
 * Response message for SearchAccounts RPC.
**/
public class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeHistoryEvents")
    public GoogleAnalyticsAdminV1betaChangeHistoryEvent[] changeHistoryEvents;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse withChangeHistoryEvents(GoogleAnalyticsAdminV1betaChangeHistoryEvent[] changeHistoryEvents) {
        this.changeHistoryEvents = changeHistoryEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}