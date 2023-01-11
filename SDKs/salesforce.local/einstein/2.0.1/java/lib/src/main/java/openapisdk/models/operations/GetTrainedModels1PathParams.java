package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrainedModels1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public GetTrainedModels1PathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}