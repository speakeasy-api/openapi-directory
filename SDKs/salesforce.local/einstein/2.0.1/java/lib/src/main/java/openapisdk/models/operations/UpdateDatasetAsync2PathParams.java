package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetAsync2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public UpdateDatasetAsync2PathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}