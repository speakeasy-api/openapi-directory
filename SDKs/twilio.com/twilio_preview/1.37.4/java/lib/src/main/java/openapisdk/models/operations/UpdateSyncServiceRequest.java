package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncServiceRequest {
    public String serverURL;
    public UpdateSyncServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncServicePathParams pathParams;
    public UpdateSyncServiceRequest withPathParams(UpdateSyncServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncServiceUpdateSyncServiceRequest request;
    public UpdateSyncServiceRequest withRequest(UpdateSyncServiceUpdateSyncServiceRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncServiceSecurity security;
    public UpdateSyncServiceRequest withSecurity(UpdateSyncServiceSecurity security) {
        this.security = security;
        return this;
    }
}