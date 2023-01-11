package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceNotificationRequest {
    public String serverURL;
    public UpdateServiceNotificationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceNotificationPathParams pathParams;
    public UpdateServiceNotificationRequest withPathParams(UpdateServiceNotificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceNotificationUpdateServiceNotificationRequest request;
    public UpdateServiceNotificationRequest withRequest(UpdateServiceNotificationUpdateServiceNotificationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceNotificationSecurity security;
    public UpdateServiceNotificationRequest withSecurity(UpdateServiceNotificationSecurity security) {
        this.security = security;
        return this;
    }
}