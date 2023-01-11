package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoleRequest {
    public String serverURL;
    public CreateRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateRolePathParams pathParams;
    public CreateRoleRequest withPathParams(CreateRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateRoleCreateRoleRequest request;
    public CreateRoleRequest withRequest(CreateRoleCreateRoleRequest request) {
        this.request = request;
        return this;
    }
    public CreateRoleSecurity security;
    public CreateRoleRequest withSecurity(CreateRoleSecurity security) {
        this.security = security;
        return this;
    }
}