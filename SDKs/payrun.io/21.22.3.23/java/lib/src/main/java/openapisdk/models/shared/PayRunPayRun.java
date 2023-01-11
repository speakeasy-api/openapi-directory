package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PayRunPayRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Executed")
    public OffsetDateTime executed;
    public PayRunPayRun withExecuted(OffsetDateTime executed) {
        this.executed = executed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsSupplementary")
    public Boolean isSupplementary;
    public PayRunPayRun withIsSupplementary(Boolean isSupplementary) {
        this.isSupplementary = isSupplementary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayFrequency")
    public PayRunPayRunPayFrequencyEnum payFrequency;
    public PayRunPayRun withPayFrequency(PayRunPayRunPayFrequencyEnum payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaySchedule")
    public PayRunPayRunPaySchedule paySchedule;
    public PayRunPayRun withPaySchedule(PayRunPayRunPaySchedule paySchedule) {
        this.paySchedule = paySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDate")
    public LocalDate paymentDate;
    public PayRunPayRun withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodEnd")
    public LocalDate periodEnd;
    public PayRunPayRun withPeriodEnd(LocalDate periodEnd) {
        this.periodEnd = periodEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodStart")
    public LocalDate periodStart;
    public PayRunPayRun withPeriodStart(LocalDate periodStart) {
        this.periodStart = periodStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProceedingPayRun")
    public PayRunPayRunProceedingPayRun proceedingPayRun;
    public PayRunPayRun withProceedingPayRun(PayRunPayRunProceedingPayRun proceedingPayRun) {
        this.proceedingPayRun = proceedingPayRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sequence")
    public Integer sequence;
    public PayRunPayRun withSequence(Integer sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxPeriod")
    public Integer taxPeriod;
    public PayRunPayRun withTaxPeriod(Integer taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public PayRunPayRun withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}