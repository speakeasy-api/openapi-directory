package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferBalanceRequest {
    public TransferBalancePathParams pathParams;
    public TransferBalanceRequest withPathParams(TransferBalancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferBalanceOrCreditRequest request;
    public TransferBalanceRequest withRequest(openapisdk.models.shared.TransferBalanceOrCreditRequest request) {
        this.request = request;
        return this;
    }
    public TransferBalanceSecurity security;
    public TransferBalanceRequest withSecurity(TransferBalanceSecurity security) {
        this.security = security;
        return this;
    }
}