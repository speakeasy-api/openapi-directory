package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batch_id")
    public String batchId;
    public DeleteBatchPathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}