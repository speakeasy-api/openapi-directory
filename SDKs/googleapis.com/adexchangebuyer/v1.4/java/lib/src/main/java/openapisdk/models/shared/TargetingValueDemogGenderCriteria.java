package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetingValueDemogGenderCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("demogGenderCriteriaIds")
    public String[] demogGenderCriteriaIds;
    public TargetingValueDemogGenderCriteria withDemogGenderCriteriaIds(String[] demogGenderCriteriaIds) {
        this.demogGenderCriteriaIds = demogGenderCriteriaIds;
        return this;
    }
}