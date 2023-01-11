package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainStatusAndProgress1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public GetTrainStatusAndProgress1PathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}