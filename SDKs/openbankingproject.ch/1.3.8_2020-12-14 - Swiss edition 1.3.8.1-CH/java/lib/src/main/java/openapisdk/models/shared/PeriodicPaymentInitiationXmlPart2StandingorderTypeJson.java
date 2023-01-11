package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PeriodicPaymentInitiationXmlPart2StandingorderTypeJson
 * The body part 2 of a periodic payment initation request containes the execution related informations
 * of the periodic payment.
 * 
**/
public class PeriodicPaymentInitiationXmlPart2StandingorderTypeJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfExecution")
    public DayOfExecutionEnum dayOfExecution;
    public PeriodicPaymentInitiationXmlPart2StandingorderTypeJson withDayOfExecution(DayOfExecutionEnum dayOfExecution) {
        this.dayOfExecution = dayOfExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public PeriodicPaymentInitiationXmlPart2StandingorderTypeJson withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionRule")
    public ExecutionRuleEnum executionRule;
    public PeriodicPaymentInitiationXmlPart2StandingorderTypeJson withExecutionRule(ExecutionRuleEnum executionRule) {
        this.executionRule = executionRule;
        return this;
    }
    @JsonProperty("frequency")
    public FrequencyCodeEnum frequency;
    public PeriodicPaymentInitiationXmlPart2StandingorderTypeJson withFrequency(FrequencyCodeEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonProperty("startDate")
    public LocalDate startDate;
    public PeriodicPaymentInitiationXmlPart2StandingorderTypeJson withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}