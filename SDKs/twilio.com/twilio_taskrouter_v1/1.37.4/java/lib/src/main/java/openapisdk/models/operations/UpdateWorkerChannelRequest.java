package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkerChannelRequest {
    public String serverURL;
    public UpdateWorkerChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWorkerChannelPathParams pathParams;
    public UpdateWorkerChannelRequest withPathParams(UpdateWorkerChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWorkerChannelUpdateWorkerChannelRequest request;
    public UpdateWorkerChannelRequest withRequest(UpdateWorkerChannelUpdateWorkerChannelRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWorkerChannelSecurity security;
    public UpdateWorkerChannelRequest withSecurity(UpdateWorkerChannelSecurity security) {
        this.security = security;
        return this;
    }
}