package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobCondition
 * JobCondition defines a readiness condition for a Revision.
**/
public class JobCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTransitionTime")
    public String lastTransitionTime;
    public JobCondition withLastTransitionTime(String lastTransitionTime) {
        this.lastTransitionTime = lastTransitionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public JobCondition withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public JobCondition withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;
    public JobCondition withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public JobCondition withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public JobCondition withType(String type) {
        this.type = type;
        return this;
    }
}