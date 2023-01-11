package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDeleteAlertsRequest
 * A request to perform batch delete on alerts.
**/
public class BatchDeleteAlertsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertId")
    public String[] alertId;
    public BatchDeleteAlertsRequest withAlertId(String[] alertId) {
        this.alertId = alertId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public BatchDeleteAlertsRequest withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}