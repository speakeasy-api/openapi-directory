package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkspaceRequest {
    public String serverURL;
    public CreateWorkspaceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateWorkspaceCreateWorkspaceRequest request;
    public CreateWorkspaceRequest withRequest(CreateWorkspaceCreateWorkspaceRequest request) {
        this.request = request;
        return this;
    }
    public CreateWorkspaceSecurity security;
    public CreateWorkspaceRequest withSecurity(CreateWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}