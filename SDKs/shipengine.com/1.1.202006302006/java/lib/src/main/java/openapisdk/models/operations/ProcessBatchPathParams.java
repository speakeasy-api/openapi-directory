package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProcessBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batch_id")
    public String batchId;
    public ProcessBatchPathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}