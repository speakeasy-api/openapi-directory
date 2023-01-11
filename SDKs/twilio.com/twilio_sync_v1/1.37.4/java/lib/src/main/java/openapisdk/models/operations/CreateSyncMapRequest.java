package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncMapRequest {
    public String serverURL;
    public CreateSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncMapPathParams pathParams;
    public CreateSyncMapRequest withPathParams(CreateSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncMapCreateSyncMapRequest request;
    public CreateSyncMapRequest withRequest(CreateSyncMapCreateSyncMapRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncMapSecurity security;
    public CreateSyncMapRequest withSecurity(CreateSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}