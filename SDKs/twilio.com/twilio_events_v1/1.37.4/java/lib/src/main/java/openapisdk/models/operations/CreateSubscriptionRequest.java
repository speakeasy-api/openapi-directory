package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionRequest {
    public String serverURL;
    public CreateSubscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSubscriptionCreateSubscriptionRequest request;
    public CreateSubscriptionRequest withRequest(CreateSubscriptionCreateSubscriptionRequest request) {
        this.request = request;
        return this;
    }
    public CreateSubscriptionSecurity security;
    public CreateSubscriptionRequest withSecurity(CreateSubscriptionSecurity security) {
        this.security = security;
        return this;
    }
}