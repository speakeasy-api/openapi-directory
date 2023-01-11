package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public DeleteDatasetPathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}