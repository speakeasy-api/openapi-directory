package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainedModelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public GetTrainedModelsPathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}