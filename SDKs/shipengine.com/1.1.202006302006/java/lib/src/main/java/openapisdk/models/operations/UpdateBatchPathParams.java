package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batch_id")
    public String batchId;
    public UpdateBatchPathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}