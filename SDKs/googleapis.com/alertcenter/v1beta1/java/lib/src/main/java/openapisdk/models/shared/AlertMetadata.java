package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlertMetadata
 * An alert metadata.
**/
public class AlertMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertId")
    public String alertId;
    public AlertMetadata withAlertId(String alertId) {
        this.alertId = alertId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public String assignee;
    public AlertMetadata withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public AlertMetadata withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public AlertMetadata withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;
    public AlertMetadata withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AlertMetadata withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public AlertMetadata withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}