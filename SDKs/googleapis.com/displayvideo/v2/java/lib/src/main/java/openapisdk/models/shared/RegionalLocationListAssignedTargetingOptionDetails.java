package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionalLocationListAssignedTargetingOptionDetails
 * Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.
**/
public class RegionalLocationListAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;
    public RegionalLocationListAssignedTargetingOptionDetails withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalLocationListId")
    public String regionalLocationListId;
    public RegionalLocationListAssignedTargetingOptionDetails withRegionalLocationListId(String regionalLocationListId) {
        this.regionalLocationListId = regionalLocationListId;
        return this;
    }
}