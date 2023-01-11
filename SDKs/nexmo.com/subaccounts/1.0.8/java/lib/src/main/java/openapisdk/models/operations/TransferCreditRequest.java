package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferCreditRequest {
    public TransferCreditPathParams pathParams;
    public TransferCreditRequest withPathParams(TransferCreditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferBalanceOrCreditRequest request;
    public TransferCreditRequest withRequest(openapisdk.models.shared.TransferBalanceOrCreditRequest request) {
        this.request = request;
        return this;
    }
    public TransferCreditSecurity security;
    public TransferCreditRequest withSecurity(TransferCreditSecurity security) {
        this.security = security;
        return this;
    }
}