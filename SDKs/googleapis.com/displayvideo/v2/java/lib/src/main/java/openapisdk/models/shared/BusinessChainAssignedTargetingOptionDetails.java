package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessChainAssignedTargetingOptionDetails
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
public class BusinessChainAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public BusinessChainAssignedTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusAmount")
    public Double proximityRadiusAmount;
    public BusinessChainAssignedTargetingOptionDetails withProximityRadiusAmount(Double proximityRadiusAmount) {
        this.proximityRadiusAmount = proximityRadiusAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusUnit")
    public BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit;
    public BusinessChainAssignedTargetingOptionDetails withProximityRadiusUnit(BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit) {
        this.proximityRadiusUnit = proximityRadiusUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public BusinessChainAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}