package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentMethodRequest {
    public UpdatePaymentMethodPathParams pathParams;
    public UpdatePaymentMethodRequest withPathParams(UpdatePaymentMethodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdatePaymentMethodRequestBody request;
    public UpdatePaymentMethodRequest withRequest(UpdatePaymentMethodRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdatePaymentMethodSecurity security;
    public UpdatePaymentMethodRequest withSecurity(UpdatePaymentMethodSecurity security) {
        this.security = security;
        return this;
    }
}