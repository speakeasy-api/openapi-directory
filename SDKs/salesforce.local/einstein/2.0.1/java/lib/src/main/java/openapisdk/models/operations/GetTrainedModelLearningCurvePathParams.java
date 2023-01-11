package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainedModelLearningCurvePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public GetTrainedModelLearningCurvePathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}