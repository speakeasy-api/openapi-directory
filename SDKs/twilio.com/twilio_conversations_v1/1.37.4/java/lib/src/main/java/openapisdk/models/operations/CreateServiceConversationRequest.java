package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationRequest {
    public String serverURL;
    public CreateServiceConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateServiceConversationPathParams pathParams;
    public CreateServiceConversationRequest withPathParams(CreateServiceConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateServiceConversationHeaders headers;
    public CreateServiceConversationRequest withHeaders(CreateServiceConversationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateServiceConversationCreateServiceConversationRequest request;
    public CreateServiceConversationRequest withRequest(CreateServiceConversationCreateServiceConversationRequest request) {
        this.request = request;
        return this;
    }
    public CreateServiceConversationSecurity security;
    public CreateServiceConversationRequest withSecurity(CreateServiceConversationSecurity security) {
        this.security = security;
        return this;
    }
}