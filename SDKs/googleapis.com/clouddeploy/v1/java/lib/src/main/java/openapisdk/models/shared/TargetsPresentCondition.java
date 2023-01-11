package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetsPresentCondition
 * TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
**/
public class TargetsPresentCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missingTargets")
    public String[] missingTargets;
    public TargetsPresentCondition withMissingTargets(String[] missingTargets) {
        this.missingTargets = missingTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Boolean status;
    public TargetsPresentCondition withStatus(Boolean status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public TargetsPresentCondition withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}