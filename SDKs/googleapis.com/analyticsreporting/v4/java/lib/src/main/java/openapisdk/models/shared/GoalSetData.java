package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalSetData
 * Represents a set of goals that were reached in an activity.
**/
public class GoalSetData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goals")
    public GoalData[] goals;
    public GoalSetData withGoals(GoalData[] goals) {
        this.goals = goals;
        return this;
    }
}