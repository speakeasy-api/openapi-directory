package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HouseholdIncomeAssignedTargetingOptionDetails
 * Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
**/
public class HouseholdIncomeAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("householdIncome")
    public HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum householdIncome;
    public HouseholdIncomeAssignedTargetingOptionDetails withHouseholdIncome(HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum householdIncome) {
        this.householdIncome = householdIncome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public HouseholdIncomeAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}