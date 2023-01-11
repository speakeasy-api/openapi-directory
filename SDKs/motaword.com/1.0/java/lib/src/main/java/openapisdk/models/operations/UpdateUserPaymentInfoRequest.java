package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserPaymentInfoRequest {
    public UpdateUserPaymentInfoPathParams pathParams;
    public UpdateUserPaymentInfoRequest withPathParams(UpdateUserPaymentInfoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentInfo request;
    public UpdateUserPaymentInfoRequest withRequest(openapisdk.models.shared.PaymentInfo request) {
        this.request = request;
        return this;
    }
}