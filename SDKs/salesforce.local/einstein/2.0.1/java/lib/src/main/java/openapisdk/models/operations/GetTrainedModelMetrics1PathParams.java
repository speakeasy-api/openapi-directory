package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainedModelMetrics1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public GetTrainedModelMetrics1PathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}