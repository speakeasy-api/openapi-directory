package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExamplesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public GetExamplesPathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}