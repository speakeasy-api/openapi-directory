package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BatchJobInstructionBatchJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("HoldingDate")
    public OffsetDateTime holdingDate;
    public BatchJobInstructionBatchJobInstruction withHoldingDate(OffsetDateTime holdingDate) {
        this.holdingDate = holdingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Instructions")
    public BatchJobInstructionBatchJobInstructionDelete instructions;
    public BatchJobInstructionBatchJobInstruction withInstructions(BatchJobInstructionBatchJobInstructionDelete instructions) {
        this.instructions = instructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidateOnly")
    public Boolean validateOnly;
    public BatchJobInstructionBatchJobInstruction withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}