package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PoiAssignedTargetingOptionDetailsInput
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
public class PoiAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusAmount")
    public Double proximityRadiusAmount;
    public PoiAssignedTargetingOptionDetailsInput withProximityRadiusAmount(Double proximityRadiusAmount) {
        this.proximityRadiusAmount = proximityRadiusAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusUnit")
    public PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit;
    public PoiAssignedTargetingOptionDetailsInput withProximityRadiusUnit(PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit) {
        this.proximityRadiusUnit = proximityRadiusUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public PoiAssignedTargetingOptionDetailsInput withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}