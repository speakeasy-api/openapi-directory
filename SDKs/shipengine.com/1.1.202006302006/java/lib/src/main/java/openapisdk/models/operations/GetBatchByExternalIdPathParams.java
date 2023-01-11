package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchByExternalIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_batch_id")
    public String externalBatchId;
    public GetBatchByExternalIdPathParams withExternalBatchId(String externalBatchId) {
        this.externalBatchId = externalBatchId;
        return this;
    }
}