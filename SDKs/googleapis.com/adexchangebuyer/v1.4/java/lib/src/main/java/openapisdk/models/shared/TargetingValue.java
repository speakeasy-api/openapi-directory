package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetingValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSizeValue")
    public TargetingValueCreativeSize creativeSizeValue;
    public TargetingValue withCreativeSizeValue(TargetingValueCreativeSize creativeSizeValue) {
        this.creativeSizeValue = creativeSizeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayPartTargetingValue")
    public TargetingValueDayPartTargeting dayPartTargetingValue;
    public TargetingValue withDayPartTargetingValue(TargetingValueDayPartTargeting dayPartTargetingValue) {
        this.dayPartTargetingValue = dayPartTargetingValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("demogAgeCriteriaValue")
    public TargetingValueDemogAgeCriteria demogAgeCriteriaValue;
    public TargetingValue withDemogAgeCriteriaValue(TargetingValueDemogAgeCriteria demogAgeCriteriaValue) {
        this.demogAgeCriteriaValue = demogAgeCriteriaValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("demogGenderCriteriaValue")
    public TargetingValueDemogGenderCriteria demogGenderCriteriaValue;
    public TargetingValue withDemogGenderCriteriaValue(TargetingValueDemogGenderCriteria demogGenderCriteriaValue) {
        this.demogGenderCriteriaValue = demogGenderCriteriaValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longValue")
    public String longValue;
    public TargetingValue withLongValue(String longValue) {
        this.longValue = longValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestPlatformTargetingValue")
    public TargetingValueRequestPlatformTargeting requestPlatformTargetingValue;
    public TargetingValue withRequestPlatformTargetingValue(TargetingValueRequestPlatformTargeting requestPlatformTargetingValue) {
        this.requestPlatformTargetingValue = requestPlatformTargetingValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public TargetingValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}