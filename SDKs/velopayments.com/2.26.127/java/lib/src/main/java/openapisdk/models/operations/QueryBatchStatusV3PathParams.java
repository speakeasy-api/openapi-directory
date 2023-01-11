package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryBatchStatusV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchId")
    public String batchId;
    public QueryBatchStatusV3PathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}