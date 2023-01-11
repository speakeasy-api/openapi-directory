package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1CreateInstructionRequest
 * Request message for CreateInstruction.
**/
public class GoogleCloudDatalabelingV1beta1CreateInstructionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruction")
    public GoogleCloudDatalabelingV1beta1Instruction instruction;
    public GoogleCloudDatalabelingV1beta1CreateInstructionRequest withInstruction(GoogleCloudDatalabelingV1beta1Instruction instruction) {
        this.instruction = instruction;
        return this;
    }
}