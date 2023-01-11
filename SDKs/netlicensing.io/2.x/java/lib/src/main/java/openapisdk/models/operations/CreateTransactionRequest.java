package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTransactionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTransactionRequestBody request;
    public CreateTransactionRequest withRequest(CreateTransactionRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateTransactionSecurity security;
    public CreateTransactionRequest withSecurity(CreateTransactionSecurity security) {
        this.security = security;
        return this;
    }
}