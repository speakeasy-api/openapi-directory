package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncStreamRequest {
    public String serverURL;
    public UpdateSyncStreamRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncStreamPathParams pathParams;
    public UpdateSyncStreamRequest withPathParams(UpdateSyncStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncStreamUpdateSyncStreamRequest request;
    public UpdateSyncStreamRequest withRequest(UpdateSyncStreamUpdateSyncStreamRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncStreamSecurity security;
    public UpdateSyncStreamRequest withSecurity(UpdateSyncStreamSecurity security) {
        this.security = security;
        return this;
    }
}