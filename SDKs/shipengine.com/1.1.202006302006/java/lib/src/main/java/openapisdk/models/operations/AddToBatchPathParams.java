package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddToBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batch_id")
    public String batchId;
    public AddToBatchPathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}