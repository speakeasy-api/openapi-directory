package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Condition
 * Defines a status condition for a resource.
**/
public class GoogleCloudRunV2Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionReason")
    public GoogleCloudRunV2ConditionExecutionReasonEnum executionReason;
    public GoogleCloudRunV2Condition withExecutionReason(GoogleCloudRunV2ConditionExecutionReasonEnum executionReason) {
        this.executionReason = executionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTransitionTime")
    public String lastTransitionTime;
    public GoogleCloudRunV2Condition withLastTransitionTime(String lastTransitionTime) {
        this.lastTransitionTime = lastTransitionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GoogleCloudRunV2Condition withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public GoogleCloudRunV2ConditionReasonEnum reason;
    public GoogleCloudRunV2Condition withReason(GoogleCloudRunV2ConditionReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionReason")
    public GoogleCloudRunV2ConditionRevisionReasonEnum revisionReason;
    public GoogleCloudRunV2Condition withRevisionReason(GoogleCloudRunV2ConditionRevisionReasonEnum revisionReason) {
        this.revisionReason = revisionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GoogleCloudRunV2ConditionSeverityEnum severity;
    public GoogleCloudRunV2Condition withSeverity(GoogleCloudRunV2ConditionSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudRunV2ConditionStateEnum state;
    public GoogleCloudRunV2Condition withState(GoogleCloudRunV2ConditionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoogleCloudRunV2Condition withType(String type) {
        this.type = type;
        return this;
    }
}