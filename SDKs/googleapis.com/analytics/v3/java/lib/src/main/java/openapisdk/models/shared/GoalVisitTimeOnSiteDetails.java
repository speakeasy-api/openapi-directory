package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalVisitTimeOnSiteDetails
 * Details for the goal of the type VISIT_TIME_ON_SITE.
**/
public class GoalVisitTimeOnSiteDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonType")
    public String comparisonType;
    public GoalVisitTimeOnSiteDetails withComparisonType(String comparisonType) {
        this.comparisonType = comparisonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonValue")
    public String comparisonValue;
    public GoalVisitTimeOnSiteDetails withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
}