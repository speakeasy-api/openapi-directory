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

public class RtiJobInstructionRtiJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarlierTaxYear")
    public Integer earlierTaxYear;
    public RtiJobInstructionRtiJobInstruction withEarlierTaxYear(Integer earlierTaxYear) {
        this.earlierTaxYear = earlierTaxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employer")
    public RtiJobInstructionRtiJobInstructionEmployer employer;
    public RtiJobInstructionRtiJobInstruction withEmployer(RtiJobInstructionRtiJobInstructionEmployer employer) {
        this.employer = employer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinalSubmissionForYear")
    public Boolean finalSubmissionForYear;
    public RtiJobInstructionRtiJobInstruction withFinalSubmissionForYear(Boolean finalSubmissionForYear) {
        this.finalSubmissionForYear = finalSubmissionForYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Generate")
    public Boolean generate;
    public RtiJobInstructionRtiJobInstruction withGenerate(Boolean generate) {
        this.generate = generate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("HoldingDate")
    public OffsetDateTime holdingDate;
    public RtiJobInstructionRtiJobInstruction withHoldingDate(OffsetDateTime holdingDate) {
        this.holdingDate = holdingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LateReason")
    public RtiJobInstructionRtiJobInstructionLateReasonEnum lateReason;
    public RtiJobInstructionRtiJobInstruction withLateReason(RtiJobInstructionRtiJobInstructionLateReasonEnum lateReason) {
        this.lateReason = lateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoPaymentForPeriodFrom")
    public LocalDate noPaymentForPeriodFrom;
    public RtiJobInstructionRtiJobInstruction withNoPaymentForPeriodFrom(LocalDate noPaymentForPeriodFrom) {
        this.noPaymentForPeriodFrom = noPaymentForPeriodFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoPaymentForPeriodTo")
    public LocalDate noPaymentForPeriodTo;
    public RtiJobInstructionRtiJobInstruction withNoPaymentForPeriodTo(LocalDate noPaymentForPeriodTo) {
        this.noPaymentForPeriodTo = noPaymentForPeriodTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaySchedule")
    public RtiJobInstructionRtiJobInstructionPaySchedule paySchedule;
    public RtiJobInstructionRtiJobInstruction withPaySchedule(RtiJobInstructionRtiJobInstructionPaySchedule paySchedule) {
        this.paySchedule = paySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDate")
    public LocalDate paymentDate;
    public RtiJobInstructionRtiJobInstruction withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodOfInactivityFrom")
    public LocalDate periodOfInactivityFrom;
    public RtiJobInstructionRtiJobInstruction withPeriodOfInactivityFrom(LocalDate periodOfInactivityFrom) {
        this.periodOfInactivityFrom = periodOfInactivityFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodOfInactivityTo")
    public LocalDate periodOfInactivityTo;
    public RtiJobInstructionRtiJobInstruction withPeriodOfInactivityTo(LocalDate periodOfInactivityTo) {
        this.periodOfInactivityTo = periodOfInactivityTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RtiTransaction")
    public RtiJobInstructionRtiJobInstructionRtiTransaction rtiTransaction;
    public RtiJobInstructionRtiJobInstruction withRtiTransaction(RtiJobInstructionRtiJobInstructionRtiTransaction rtiTransaction) {
        this.rtiTransaction = rtiTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RtiType")
    public String rtiType;
    public RtiJobInstructionRtiJobInstruction withRtiType(String rtiType) {
        this.rtiType = rtiType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeCeased")
    public LocalDate schemeCeased;
    public RtiJobInstructionRtiJobInstruction withSchemeCeased(LocalDate schemeCeased) {
        this.schemeCeased = schemeCeased;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxMonth")
    public Integer taxMonth;
    public RtiJobInstructionRtiJobInstruction withTaxMonth(Integer taxMonth) {
        this.taxMonth = taxMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public RtiJobInstructionRtiJobInstruction withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public RtiJobInstructionRtiJobInstruction withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transmit")
    public Boolean transmit;
    public RtiJobInstructionRtiJobInstruction withTransmit(Boolean transmit) {
        this.transmit = transmit;
        return this;
    }
}