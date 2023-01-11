package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteModel1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public DeleteModel1PathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}