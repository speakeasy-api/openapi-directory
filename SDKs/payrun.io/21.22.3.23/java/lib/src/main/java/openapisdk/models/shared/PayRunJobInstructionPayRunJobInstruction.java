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

public class PayRunJobInstructionPayRunJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employees")
    public PayRunJobInstructionPayRunJobInstructionEmployee employees;
    public PayRunJobInstructionPayRunJobInstruction withEmployees(PayRunJobInstructionPayRunJobInstructionEmployee employees) {
        this.employees = employees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public LocalDate endDate;
    public PayRunJobInstructionPayRunJobInstruction withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("HoldingDate")
    public OffsetDateTime holdingDate;
    public PayRunJobInstructionPayRunJobInstruction withHoldingDate(OffsetDateTime holdingDate) {
        this.holdingDate = holdingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsSupplementary")
    public Boolean isSupplementary;
    public PayRunJobInstructionPayRunJobInstruction withIsSupplementary(Boolean isSupplementary) {
        this.isSupplementary = isSupplementary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaySchedule")
    public PayRunJobInstructionPayRunJobInstructionPaySchedule paySchedule;
    public PayRunJobInstructionPayRunJobInstruction withPaySchedule(PayRunJobInstructionPayRunJobInstructionPaySchedule paySchedule) {
        this.paySchedule = paySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDate")
    public LocalDate paymentDate;
    public PayRunJobInstructionPayRunJobInstruction withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public LocalDate startDate;
    public PayRunJobInstructionPayRunJobInstruction withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}