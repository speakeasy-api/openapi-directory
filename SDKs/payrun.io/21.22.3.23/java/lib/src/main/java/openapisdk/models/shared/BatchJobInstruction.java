package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchJobInstruction")
    public BatchJobInstructionBatchJobInstruction batchJobInstruction;
    public BatchJobInstruction withBatchJobInstruction(BatchJobInstructionBatchJobInstruction batchJobInstruction) {
        this.batchJobInstruction = batchJobInstruction;
        return this;
    }
}