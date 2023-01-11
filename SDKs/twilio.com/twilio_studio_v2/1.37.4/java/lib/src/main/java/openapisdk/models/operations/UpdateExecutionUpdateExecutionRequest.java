package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExecutionUpdateExecutionRequest {
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.ExecutionEnumStatusEnum status;
    public UpdateExecutionUpdateExecutionRequest withStatus(openapisdk.models.shared.ExecutionEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}