package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHostedNumbersHostedNumberOrderRequest {
    public String serverURL;
    public CreateHostedNumbersHostedNumberOrderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest request;
    public CreateHostedNumbersHostedNumberOrderRequest withRequest(CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest request) {
        this.request = request;
        return this;
    }
    public CreateHostedNumbersHostedNumberOrderSecurity security;
    public CreateHostedNumbersHostedNumberOrderRequest withSecurity(CreateHostedNumbersHostedNumberOrderSecurity security) {
        this.security = security;
        return this;
    }
}