package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDataset1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public DeleteDataset1PathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}