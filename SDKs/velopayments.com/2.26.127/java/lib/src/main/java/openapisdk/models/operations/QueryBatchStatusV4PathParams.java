package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryBatchStatusV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchId")
    public String batchId;
    public QueryBatchStatusV4PathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}