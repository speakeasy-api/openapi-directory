package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PoiAssignedTargetingOptionDetails
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
**/
public class PoiAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PoiAssignedTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public PoiAssignedTargetingOptionDetails withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public PoiAssignedTargetingOptionDetails withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusAmount")
    public Double proximityRadiusAmount;
    public PoiAssignedTargetingOptionDetails withProximityRadiusAmount(Double proximityRadiusAmount) {
        this.proximityRadiusAmount = proximityRadiusAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusUnit")
    public PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit;
    public PoiAssignedTargetingOptionDetails withProximityRadiusUnit(PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum proximityRadiusUnit) {
        this.proximityRadiusUnit = proximityRadiusUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public PoiAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}