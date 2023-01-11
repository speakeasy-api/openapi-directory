package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReadOperationResultPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=operationId")
    public String operationId;
    public GetReadOperationResultPathParams withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}