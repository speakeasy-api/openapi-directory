package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public GetDatasetPathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}