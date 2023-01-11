package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CarrierAndIspAssignedTargetingOptionDetails
 * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
public class CarrierAndIspAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CarrierAndIspAssignedTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;
    public CarrierAndIspAssignedTargetingOptionDetails withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public CarrierAndIspAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}