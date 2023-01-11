package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNotificationRequest {
    public String serverURL;
    public CreateNotificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateNotificationPathParams pathParams;
    public CreateNotificationRequest withPathParams(CreateNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateNotificationCreateNotificationRequest request;
    public CreateNotificationRequest withRequest(CreateNotificationCreateNotificationRequest request) {
        this.request = request;
        return this;
    }
    public CreateNotificationSecurity security;
    public CreateNotificationRequest withSecurity(CreateNotificationSecurity security) {
        this.security = security;
        return this;
    }
}