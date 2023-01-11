package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBatchErrorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batch_id")
    public String batchId;
    public ListBatchErrorsPathParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
}