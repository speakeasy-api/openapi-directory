package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckDocumentsReindexQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async_request_key")
    public String asyncRequestKey;
    public CheckDocumentsReindexQueryParams withAsyncRequestKey(String asyncRequestKey) {
        this.asyncRequestKey = asyncRequestKey;
        return this;
    }
}