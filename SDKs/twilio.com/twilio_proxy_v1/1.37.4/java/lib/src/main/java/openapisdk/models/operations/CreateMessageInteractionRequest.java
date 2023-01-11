package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageInteractionRequest {
    public String serverURL;
    public CreateMessageInteractionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateMessageInteractionPathParams pathParams;
    public CreateMessageInteractionRequest withPathParams(CreateMessageInteractionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateMessageInteractionCreateMessageInteractionRequest request;
    public CreateMessageInteractionRequest withRequest(CreateMessageInteractionCreateMessageInteractionRequest request) {
        this.request = request;
        return this;
    }
    public CreateMessageInteractionSecurity security;
    public CreateMessageInteractionRequest withSecurity(CreateMessageInteractionSecurity security) {
        this.security = security;
        return this;
    }
}