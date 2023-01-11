package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainStatusAndProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public GetTrainStatusAndProgressPathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}