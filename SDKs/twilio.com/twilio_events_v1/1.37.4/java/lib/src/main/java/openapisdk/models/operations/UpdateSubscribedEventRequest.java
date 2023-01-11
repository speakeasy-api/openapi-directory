package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscribedEventRequest {
    public String serverURL;
    public UpdateSubscribedEventRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSubscribedEventPathParams pathParams;
    public UpdateSubscribedEventRequest withPathParams(UpdateSubscribedEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSubscribedEventUpdateSubscribedEventRequest request;
    public UpdateSubscribedEventRequest withRequest(UpdateSubscribedEventUpdateSubscribedEventRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSubscribedEventSecurity security;
    public UpdateSubscribedEventRequest withSecurity(UpdateSubscribedEventSecurity security) {
        this.security = security;
        return this;
    }
}