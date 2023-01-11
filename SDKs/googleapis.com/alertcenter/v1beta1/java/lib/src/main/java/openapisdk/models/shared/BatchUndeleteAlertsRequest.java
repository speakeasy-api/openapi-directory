package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUndeleteAlertsRequest
 * A request to perform batch undelete on alerts.
**/
public class BatchUndeleteAlertsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertId")
    public String[] alertId;
    public BatchUndeleteAlertsRequest withAlertId(String[] alertId) {
        this.alertId = alertId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public BatchUndeleteAlertsRequest withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}