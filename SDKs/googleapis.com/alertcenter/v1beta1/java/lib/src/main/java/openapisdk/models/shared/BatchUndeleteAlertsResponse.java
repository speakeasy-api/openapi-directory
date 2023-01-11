package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUndeleteAlertsResponse
 * Response to batch undelete operation on alerts.
**/
public class BatchUndeleteAlertsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedAlertStatus")
    public java.util.Map<String, Status> failedAlertStatus;
    public BatchUndeleteAlertsResponse withFailedAlertStatus(java.util.Map<String, Status> failedAlertStatus) {
        this.failedAlertStatus = failedAlertStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successAlertIds")
    public String[] successAlertIds;
    public BatchUndeleteAlertsResponse withSuccessAlertIds(String[] successAlertIds) {
        this.successAlertIds = successAlertIds;
        return this;
    }
}