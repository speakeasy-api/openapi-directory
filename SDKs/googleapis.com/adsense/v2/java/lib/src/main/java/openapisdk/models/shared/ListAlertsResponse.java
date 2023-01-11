package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAlertsResponse
 * Response definition for the alerts list rpc.
**/
public class ListAlertsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alerts")
    public Alert[] alerts;
    public ListAlertsResponse withAlerts(Alert[] alerts) {
        this.alerts = alerts;
        return this;
    }
}