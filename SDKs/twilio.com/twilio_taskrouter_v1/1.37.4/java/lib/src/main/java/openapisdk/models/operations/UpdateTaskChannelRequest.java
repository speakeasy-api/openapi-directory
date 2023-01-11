package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskChannelRequest {
    public String serverURL;
    public UpdateTaskChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTaskChannelPathParams pathParams;
    public UpdateTaskChannelRequest withPathParams(UpdateTaskChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTaskChannelUpdateTaskChannelRequest request;
    public UpdateTaskChannelRequest withRequest(UpdateTaskChannelUpdateTaskChannelRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTaskChannelSecurity security;
    public UpdateTaskChannelRequest withSecurity(UpdateTaskChannelSecurity security) {
        this.security = security;
        return this;
    }
}