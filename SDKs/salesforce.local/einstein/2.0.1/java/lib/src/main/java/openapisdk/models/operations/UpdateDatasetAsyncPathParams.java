package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetAsyncPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public UpdateDatasetAsyncPathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}