package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainedModelMetricsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public GetTrainedModelMetricsPathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}