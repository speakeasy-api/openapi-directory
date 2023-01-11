package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batch_id")
    public String batchId;
    public GetBatchByIdPathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}