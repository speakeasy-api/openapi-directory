package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParentalStatusTargetingOptionDetails
 * Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
**/
public class ParentalStatusTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentalStatus")
    public ParentalStatusTargetingOptionDetailsParentalStatusEnum parentalStatus;
    public ParentalStatusTargetingOptionDetails withParentalStatus(ParentalStatusTargetingOptionDetailsParentalStatusEnum parentalStatus) {
        this.parentalStatus = parentalStatus;
        return this;
    }
}