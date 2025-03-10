/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchJobInstruction - The the batch job instruction object.
 */
public class BatchJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchJobInstruction")
    public BatchJobInstructionBatchJobInstruction batchJobInstruction;
    public BatchJobInstruction withBatchJobInstruction(BatchJobInstructionBatchJobInstruction batchJobInstruction) {
        this.batchJobInstruction = batchJobInstruction;
        return this;
    }
    
}
