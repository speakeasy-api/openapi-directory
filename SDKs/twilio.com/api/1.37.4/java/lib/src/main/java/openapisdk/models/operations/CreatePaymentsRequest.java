package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePaymentsRequest {
    public String serverURL;
    public CreatePaymentsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreatePaymentsPathParams pathParams;
    public CreatePaymentsRequest withPathParams(CreatePaymentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreatePaymentsCreatePaymentsRequest request;
    public CreatePaymentsRequest withRequest(CreatePaymentsCreatePaymentsRequest request) {
        this.request = request;
        return this;
    }
    public CreatePaymentsSecurity security;
    public CreatePaymentsRequest withSecurity(CreatePaymentsSecurity security) {
        this.security = security;
        return this;
    }
}