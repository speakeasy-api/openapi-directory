package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentsRequest {
    public String serverURL;
    public UpdatePaymentsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdatePaymentsPathParams pathParams;
    public UpdatePaymentsRequest withPathParams(UpdatePaymentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdatePaymentsUpdatePaymentsRequest request;
    public UpdatePaymentsRequest withRequest(UpdatePaymentsUpdatePaymentsRequest request) {
        this.request = request;
        return this;
    }
    public UpdatePaymentsSecurity security;
    public UpdatePaymentsRequest withSecurity(UpdatePaymentsSecurity security) {
        this.security = security;
        return this;
    }
}