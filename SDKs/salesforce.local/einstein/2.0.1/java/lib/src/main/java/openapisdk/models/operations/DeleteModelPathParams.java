package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public DeleteModelPathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}