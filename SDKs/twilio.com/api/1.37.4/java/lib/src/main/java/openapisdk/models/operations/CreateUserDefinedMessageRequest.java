package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserDefinedMessageRequest {
    public String serverURL;
    public CreateUserDefinedMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUserDefinedMessagePathParams pathParams;
    public CreateUserDefinedMessageRequest withPathParams(CreateUserDefinedMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUserDefinedMessageCreateUserDefinedMessageRequest request;
    public CreateUserDefinedMessageRequest withRequest(CreateUserDefinedMessageCreateUserDefinedMessageRequest request) {
        this.request = request;
        return this;
    }
    public CreateUserDefinedMessageSecurity security;
    public CreateUserDefinedMessageRequest withSecurity(CreateUserDefinedMessageSecurity security) {
        this.security = security;
        return this;
    }
}