package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFromBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batch_id")
    public String batchId;
    public RemoveFromBatchPathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}