package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncStreamRequest {
    public String serverURL;
    public CreateSyncStreamRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncStreamPathParams pathParams;
    public CreateSyncStreamRequest withPathParams(CreateSyncStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncStreamCreateSyncStreamRequest request;
    public CreateSyncStreamRequest withRequest(CreateSyncStreamCreateSyncStreamRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncStreamSecurity security;
    public CreateSyncStreamRequest withSecurity(CreateSyncStreamSecurity security) {
        this.security = security;
        return this;
    }
}