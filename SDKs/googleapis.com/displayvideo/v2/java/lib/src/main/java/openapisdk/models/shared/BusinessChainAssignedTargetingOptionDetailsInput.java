package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessChainAssignedTargetingOptionDetailsInput
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
public class BusinessChainAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusAmount")
    public Double proximityRadiusAmount;
    public BusinessChainAssignedTargetingOptionDetailsInput withProximityRadiusAmount(Double proximityRadiusAmount) {
        this.proximityRadiusAmount = proximityRadiusAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusUnit")
    public BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit;
    public BusinessChainAssignedTargetingOptionDetailsInput withProximityRadiusUnit(BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit) {
        this.proximityRadiusUnit = proximityRadiusUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public BusinessChainAssignedTargetingOptionDetailsInput withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}