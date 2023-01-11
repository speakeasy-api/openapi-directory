package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CarrierAndIspAssignedTargetingOptionDetailsInput
 * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
public class CarrierAndIspAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;
    public CarrierAndIspAssignedTargetingOptionDetailsInput withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public CarrierAndIspAssignedTargetingOptionDetailsInput withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}