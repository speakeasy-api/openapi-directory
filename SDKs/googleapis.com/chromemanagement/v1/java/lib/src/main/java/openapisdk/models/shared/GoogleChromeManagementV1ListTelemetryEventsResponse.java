package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1ListTelemetryEventsResponse
 * Response message for listing telemetry events for a customer.
**/
public class GoogleChromeManagementV1ListTelemetryEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleChromeManagementV1ListTelemetryEventsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telemetryEvents")
    public GoogleChromeManagementV1TelemetryEvent[] telemetryEvents;
    public GoogleChromeManagementV1ListTelemetryEventsResponse withTelemetryEvents(GoogleChromeManagementV1TelemetryEvent[] telemetryEvents) {
        this.telemetryEvents = telemetryEvents;
        return this;
    }
}