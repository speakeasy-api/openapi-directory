package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingValue
 * A polymorphic targeting value used as part of Shared Targeting.
**/
public class TargetingValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSizeValue")
    public CreativeSize creativeSizeValue;
    public TargetingValue withCreativeSizeValue(CreativeSize creativeSizeValue) {
        this.creativeSizeValue = creativeSizeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayPartTargetingValue")
    public DayPartTargeting dayPartTargetingValue;
    public TargetingValue withDayPartTargetingValue(DayPartTargeting dayPartTargetingValue) {
        this.dayPartTargetingValue = dayPartTargetingValue;
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
    @JsonProperty("stringValue")
    public String stringValue;
    public TargetingValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}