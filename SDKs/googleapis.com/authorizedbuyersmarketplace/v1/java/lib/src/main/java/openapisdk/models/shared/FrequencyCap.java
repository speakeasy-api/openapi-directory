package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FrequencyCap
 * Message contains details about publisher-set frequency caps of the delivery.
**/
public class FrequencyCap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxImpressions")
    public Integer maxImpressions;
    public FrequencyCap withMaxImpressions(Integer maxImpressions) {
        this.maxImpressions = maxImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUnitType")
    public FrequencyCapTimeUnitTypeEnum timeUnitType;
    public FrequencyCap withTimeUnitType(FrequencyCapTimeUnitTypeEnum timeUnitType) {
        this.timeUnitType = timeUnitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUnitsCount")
    public Integer timeUnitsCount;
    public FrequencyCap withTimeUnitsCount(Integer timeUnitsCount) {
        this.timeUnitsCount = timeUnitsCount;
        return this;
    }
}