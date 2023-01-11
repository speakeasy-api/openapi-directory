package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalData
 * Represents all the details pertaining to a goal.
**/
public class GoalData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalCompletionLocation")
    public String goalCompletionLocation;
    public GoalData withGoalCompletionLocation(String goalCompletionLocation) {
        this.goalCompletionLocation = goalCompletionLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalCompletions")
    public String goalCompletions;
    public GoalData withGoalCompletions(String goalCompletions) {
        this.goalCompletions = goalCompletions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalIndex")
    public Integer goalIndex;
    public GoalData withGoalIndex(Integer goalIndex) {
        this.goalIndex = goalIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalName")
    public String goalName;
    public GoalData withGoalName(String goalName) {
        this.goalName = goalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalPreviousStep1")
    public String goalPreviousStep1;
    public GoalData withGoalPreviousStep1(String goalPreviousStep1) {
        this.goalPreviousStep1 = goalPreviousStep1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalPreviousStep2")
    public String goalPreviousStep2;
    public GoalData withGoalPreviousStep2(String goalPreviousStep2) {
        this.goalPreviousStep2 = goalPreviousStep2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalPreviousStep3")
    public String goalPreviousStep3;
    public GoalData withGoalPreviousStep3(String goalPreviousStep3) {
        this.goalPreviousStep3 = goalPreviousStep3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goalValue")
    public Double goalValue;
    public GoalData withGoalValue(Double goalValue) {
        this.goalValue = goalValue;
        return this;
    }
}