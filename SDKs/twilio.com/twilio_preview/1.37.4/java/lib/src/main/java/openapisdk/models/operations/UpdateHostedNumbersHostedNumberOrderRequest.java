package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHostedNumbersHostedNumberOrderRequest {
    public String serverURL;
    public UpdateHostedNumbersHostedNumberOrderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateHostedNumbersHostedNumberOrderPathParams pathParams;
    public UpdateHostedNumbersHostedNumberOrderRequest withPathParams(UpdateHostedNumbersHostedNumberOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest request;
    public UpdateHostedNumbersHostedNumberOrderRequest withRequest(UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest request) {
        this.request = request;
        return this;
    }
    public UpdateHostedNumbersHostedNumberOrderSecurity security;
    public UpdateHostedNumbersHostedNumberOrderRequest withSecurity(UpdateHostedNumbersHostedNumberOrderSecurity security) {
        this.security = security;
        return this;
    }
}