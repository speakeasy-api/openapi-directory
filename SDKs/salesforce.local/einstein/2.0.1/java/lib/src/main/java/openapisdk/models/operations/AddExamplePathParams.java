package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddExamplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public AddExamplePathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}