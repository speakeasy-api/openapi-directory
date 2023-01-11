package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAlertsResponse
 * Response message for an alert listing request.
**/
public class ListAlertsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alerts")
    public Alert[] alerts;
    public ListAlertsResponse withAlerts(Alert[] alerts) {
        this.alerts = alerts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAlertsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}