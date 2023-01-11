package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscribedEventRequest {
    public String serverURL;
    public CreateSubscribedEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSubscribedEventPathParams pathParams;
    public CreateSubscribedEventRequest withPathParams(CreateSubscribedEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSubscribedEventCreateSubscribedEventRequest request;
    public CreateSubscribedEventRequest withRequest(CreateSubscribedEventCreateSubscribedEventRequest request) {
        this.request = request;
        return this;
    }
    public CreateSubscribedEventSecurity security;
    public CreateSubscribedEventRequest withSecurity(CreateSubscribedEventSecurity security) {
        this.security = security;
        return this;
    }
}