package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerformanceGoal
 * Settings that control the performance goal of a campaign or insertion order.
**/
public class PerformanceGoal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalAmountMicros")
    public String performanceGoalAmountMicros;
    public PerformanceGoal withPerformanceGoalAmountMicros(String performanceGoalAmountMicros) {
        this.performanceGoalAmountMicros = performanceGoalAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalPercentageMicros")
    public String performanceGoalPercentageMicros;
    public PerformanceGoal withPerformanceGoalPercentageMicros(String performanceGoalPercentageMicros) {
        this.performanceGoalPercentageMicros = performanceGoalPercentageMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalString")
    public String performanceGoalString;
    public PerformanceGoal withPerformanceGoalString(String performanceGoalString) {
        this.performanceGoalString = performanceGoalString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceGoalType")
    public PerformanceGoalPerformanceGoalTypeEnum performanceGoalType;
    public PerformanceGoal withPerformanceGoalType(PerformanceGoalPerformanceGoalTypeEnum performanceGoalType) {
        this.performanceGoalType = performanceGoalType;
        return this;
    }
}