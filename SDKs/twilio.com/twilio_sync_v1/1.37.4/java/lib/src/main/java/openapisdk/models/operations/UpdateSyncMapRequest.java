package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncMapRequest {
    public String serverURL;
    public UpdateSyncMapRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncMapPathParams pathParams;
    public UpdateSyncMapRequest withPathParams(UpdateSyncMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncMapUpdateSyncMapRequest request;
    public UpdateSyncMapRequest withRequest(UpdateSyncMapUpdateSyncMapRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncMapSecurity security;
    public UpdateSyncMapRequest withSecurity(UpdateSyncMapSecurity security) {
        this.security = security;
        return this;
    }
}