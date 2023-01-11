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

public class DpsJobInstructionDpsJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Apply")
    public Boolean apply;
    public DpsJobInstructionDpsJobInstruction withApply(Boolean apply) {
        this.apply = apply;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employer")
    public DpsJobInstructionDpsJobInstructionEmployer employer;
    public DpsJobInstructionDpsJobInstruction withEmployer(DpsJobInstructionDpsJobInstructionEmployer employer) {
        this.employer = employer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromDate")
    public LocalDate fromDate;
    public DpsJobInstructionDpsJobInstruction withFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("HoldingDate")
    public OffsetDateTime holdingDate;
    public DpsJobInstructionDpsJobInstruction withHoldingDate(OffsetDateTime holdingDate) {
        this.holdingDate = holdingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageTypes")
    public DpsJobInstructionDpsJobInstructionType messageTypes;
    public DpsJobInstructionDpsJobInstruction withMessageTypes(DpsJobInstructionDpsJobInstructionType messageTypes) {
        this.messageTypes = messageTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessagesToProcess")
    public DpsJobInstructionDpsJobInstructionMessage messagesToProcess;
    public DpsJobInstructionDpsJobInstruction withMessagesToProcess(DpsJobInstructionDpsJobInstructionMessage messagesToProcess) {
        this.messagesToProcess = messagesToProcess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Retrieve")
    public Boolean retrieve;
    public DpsJobInstructionDpsJobInstruction withRetrieve(Boolean retrieve) {
        this.retrieve = retrieve;
        return this;
    }
}