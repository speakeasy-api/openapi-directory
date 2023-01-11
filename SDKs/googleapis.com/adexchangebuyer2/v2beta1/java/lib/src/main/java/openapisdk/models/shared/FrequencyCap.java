package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FrequencyCap
 * Frequency cap.
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
    @JsonProperty("numTimeUnits")
    public Integer numTimeUnits;
    public FrequencyCap withNumTimeUnits(Integer numTimeUnits) {
        this.numTimeUnits = numTimeUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUnitType")
    public FrequencyCapTimeUnitTypeEnum timeUnitType;
    public FrequencyCap withTimeUnitType(FrequencyCapTimeUnitTypeEnum timeUnitType) {
        this.timeUnitType = timeUnitType;
        return this;
    }
}