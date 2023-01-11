package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceRequest {
    public String serverURL;
    public UpdateWorkspaceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWorkspacePathParams pathParams;
    public UpdateWorkspaceRequest withPathParams(UpdateWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWorkspaceUpdateWorkspaceRequest request;
    public UpdateWorkspaceRequest withRequest(UpdateWorkspaceUpdateWorkspaceRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWorkspaceSecurity security;
    public UpdateWorkspaceRequest withSecurity(UpdateWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}