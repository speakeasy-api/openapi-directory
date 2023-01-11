package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextOperationResultPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=operationId")
    public String operationId;
    public GetTextOperationResultPathParams withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}