package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchJobInstructionBatchJobInstructionDelete
 * The batch job instructions' instructions
**/
public class BatchJobInstructionBatchJobInstructionDelete {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DELETE")
    public Object[] delete;
    public BatchJobInstructionBatchJobInstructionDelete withDelete(Object[] delete) {
        this.delete = delete;
        return this;
    }
}