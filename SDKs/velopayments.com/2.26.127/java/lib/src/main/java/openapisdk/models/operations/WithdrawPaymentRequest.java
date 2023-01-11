package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WithdrawPaymentRequest {
    public WithdrawPaymentPathParams pathParams;
    public WithdrawPaymentRequest withPathParams(WithdrawPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WithdrawPaymentRequest request;
    public WithdrawPaymentRequest withRequest(openapisdk.models.shared.WithdrawPaymentRequest request) {
        this.request = request;
        return this;
    }
}