package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HouseholdIncomeTargetingOptionDetails
 * Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.
**/
public class HouseholdIncomeTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("householdIncome")
    public HouseholdIncomeTargetingOptionDetailsHouseholdIncomeEnum householdIncome;
    public HouseholdIncomeTargetingOptionDetails withHouseholdIncome(HouseholdIncomeTargetingOptionDetailsHouseholdIncomeEnum householdIncome) {
        this.householdIncome = householdIncome;
        return this;
    }
}