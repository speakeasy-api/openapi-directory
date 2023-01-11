package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskChannelRequest {
    public String serverURL;
    public CreateTaskChannelRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateTaskChannelPathParams pathParams;
    public CreateTaskChannelRequest withPathParams(CreateTaskChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTaskChannelCreateTaskChannelRequest request;
    public CreateTaskChannelRequest withRequest(CreateTaskChannelCreateTaskChannelRequest request) {
        this.request = request;
        return this;
    }
    public CreateTaskChannelSecurity security;
    public CreateTaskChannelRequest withSecurity(CreateTaskChannelSecurity security) {
        this.security = security;
        return this;
    }
}