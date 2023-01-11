package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StandingOrderDetails
 * Details of underlying standing orders.
 * 
**/
public class StandingOrderDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfExecution")
    public DayOfExecutionEnum dayOfExecution;
    public StandingOrderDetails withDayOfExecution(DayOfExecutionEnum dayOfExecution) {
        this.dayOfExecution = dayOfExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public StandingOrderDetails withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionRule")
    public ExecutionRuleEnum executionRule;
    public StandingOrderDetails withExecutionRule(ExecutionRuleEnum executionRule) {
        this.executionRule = executionRule;
        return this;
    }
    @JsonProperty("frequency")
    public FrequencyCodeEnum frequency;
    public StandingOrderDetails withFrequency(FrequencyCodeEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitAmount")
    public Amount limitAmount;
    public StandingOrderDetails withLimitAmount(Amount limitAmount) {
        this.limitAmount = limitAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthsOfExecution")
    public MonthsOfExecutionEnum[] monthsOfExecution;
    public StandingOrderDetails withMonthsOfExecution(MonthsOfExecutionEnum[] monthsOfExecution) {
        this.monthsOfExecution = monthsOfExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiplicator")
    public Long multiplicator;
    public StandingOrderDetails withMultiplicator(Long multiplicator) {
        this.multiplicator = multiplicator;
        return this;
    }
    @JsonProperty("startDate")
    public LocalDate startDate;
    public StandingOrderDetails withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withinAMonthFlag")
    public Boolean withinAMonthFlag;
    public StandingOrderDetails withWithinAMonthFlag(Boolean withinAMonthFlag) {
        this.withinAMonthFlag = withinAMonthFlag;
        return this;
    }
}