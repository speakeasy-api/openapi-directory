package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncServiceRequest {
    public String serverURL;
    public CreateSyncServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncServiceCreateSyncServiceRequest request;
    public CreateSyncServiceRequest withRequest(CreateSyncServiceCreateSyncServiceRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncServiceSecurity security;
    public CreateSyncServiceRequest withSecurity(CreateSyncServiceSecurity security) {
        this.security = security;
        return this;
    }
}