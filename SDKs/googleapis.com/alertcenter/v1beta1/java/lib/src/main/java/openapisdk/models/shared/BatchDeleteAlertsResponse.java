package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDeleteAlertsResponse
 * Response to batch delete operation on alerts.
**/
public class BatchDeleteAlertsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedAlertStatus")
    public java.util.Map<String, Status> failedAlertStatus;
    public BatchDeleteAlertsResponse withFailedAlertStatus(java.util.Map<String, Status> failedAlertStatus) {
        this.failedAlertStatus = failedAlertStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successAlertIds")
    public String[] successAlertIds;
    public BatchDeleteAlertsResponse withSuccessAlertIds(String[] successAlertIds) {
        this.successAlertIds = successAlertIds;
        return this;
    }
}