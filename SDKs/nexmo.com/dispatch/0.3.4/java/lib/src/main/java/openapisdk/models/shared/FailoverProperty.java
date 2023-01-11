package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailoverProperty
 * Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
**/
public class FailoverProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition_status")
    public FailoverPropertyConditionStatusEnum conditionStatus;
    public FailoverProperty withConditionStatus(FailoverPropertyConditionStatusEnum conditionStatus) {
        this.conditionStatus = conditionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiry_time")
    public Long expiryTime;
    public FailoverProperty withExpiryTime(Long expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }
}