package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncMapRequest {
    public String serverURL;
    public CreateSyncSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncSyncMapPathParams pathParams;
    public CreateSyncSyncMapRequest withPathParams(CreateSyncSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncSyncMapCreateSyncSyncMapRequest request;
    public CreateSyncSyncMapRequest withRequest(CreateSyncSyncMapCreateSyncSyncMapRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncSyncMapSecurity security;
    public CreateSyncSyncMapRequest withSecurity(CreateSyncSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}