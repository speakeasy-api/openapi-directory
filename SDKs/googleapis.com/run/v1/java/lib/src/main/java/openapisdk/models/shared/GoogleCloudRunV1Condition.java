package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV1Condition
 * Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
**/
public class GoogleCloudRunV1Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTransitionTime")
    public String lastTransitionTime;
    public GoogleCloudRunV1Condition withLastTransitionTime(String lastTransitionTime) {
        this.lastTransitionTime = lastTransitionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GoogleCloudRunV1Condition withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public GoogleCloudRunV1Condition withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;
    public GoogleCloudRunV1Condition withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GoogleCloudRunV1Condition withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoogleCloudRunV1Condition withType(String type) {
        this.type = type;
        return this;
    }
}