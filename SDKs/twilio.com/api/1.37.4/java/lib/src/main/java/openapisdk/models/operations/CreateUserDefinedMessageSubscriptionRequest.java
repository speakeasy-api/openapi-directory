package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserDefinedMessageSubscriptionRequest {
    public String serverURL;
    public CreateUserDefinedMessageSubscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUserDefinedMessageSubscriptionPathParams pathParams;
    public CreateUserDefinedMessageSubscriptionRequest withPathParams(CreateUserDefinedMessageSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest request;
    public CreateUserDefinedMessageSubscriptionRequest withRequest(CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest request) {
        this.request = request;
        return this;
    }
    public CreateUserDefinedMessageSubscriptionSecurity security;
    public CreateUserDefinedMessageSubscriptionRequest withSecurity(CreateUserDefinedMessageSubscriptionSecurity security) {
        this.security = security;
        return this;
    }
}