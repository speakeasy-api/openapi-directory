package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExamples1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public GetExamples1PathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}