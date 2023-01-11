package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeliveryControlFrequencyCap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxImpressions")
    public Integer maxImpressions;
    public DeliveryControlFrequencyCap withMaxImpressions(Integer maxImpressions) {
        this.maxImpressions = maxImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numTimeUnits")
    public Integer numTimeUnits;
    public DeliveryControlFrequencyCap withNumTimeUnits(Integer numTimeUnits) {
        this.numTimeUnits = numTimeUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUnitType")
    public String timeUnitType;
    public DeliveryControlFrequencyCap withTimeUnitType(String timeUnitType) {
        this.timeUnitType = timeUnitType;
        return this;
    }
}