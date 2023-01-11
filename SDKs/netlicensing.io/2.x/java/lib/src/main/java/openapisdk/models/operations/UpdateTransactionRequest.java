package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionRequest {
    public UpdateTransactionPathParams pathParams;
    public UpdateTransactionRequest withPathParams(UpdateTransactionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTransactionRequestBody request;
    public UpdateTransactionRequest withRequest(UpdateTransactionRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateTransactionSecurity security;
    public UpdateTransactionRequest withSecurity(UpdateTransactionSecurity security) {
        this.security = security;
        return this;
    }
}