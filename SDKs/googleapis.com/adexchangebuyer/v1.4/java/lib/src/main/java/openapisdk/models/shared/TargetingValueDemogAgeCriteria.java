package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetingValueDemogAgeCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("demogAgeCriteriaIds")
    public String[] demogAgeCriteriaIds;
    public TargetingValueDemogAgeCriteria withDemogAgeCriteriaIds(String[] demogAgeCriteriaIds) {
        this.demogAgeCriteriaIds = demogAgeCriteriaIds;
        return this;
    }
}