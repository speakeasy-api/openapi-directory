package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalVisitNumPagesDetails
 * Details for the goal of the type VISIT_NUM_PAGES.
**/
public class GoalVisitNumPagesDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonType")
    public String comparisonType;
    public GoalVisitNumPagesDetails withComparisonType(String comparisonType) {
        this.comparisonType = comparisonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonValue")
    public String comparisonValue;
    public GoalVisitNumPagesDetails withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
}