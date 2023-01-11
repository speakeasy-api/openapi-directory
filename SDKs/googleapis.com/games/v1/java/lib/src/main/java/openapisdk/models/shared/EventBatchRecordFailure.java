package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventBatchRecordFailure
 * A batch update failure resource.
**/
public class EventBatchRecordFailure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCause")
    public EventBatchRecordFailureFailureCauseEnum failureCause;
    public EventBatchRecordFailure withFailureCause(EventBatchRecordFailureFailureCauseEnum failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventBatchRecordFailure withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public EventPeriodRange range;
    public EventBatchRecordFailure withRange(EventPeriodRange range) {
        this.range = range;
        return this;
    }
}