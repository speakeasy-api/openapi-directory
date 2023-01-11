package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleRequest {
    public String serverURL;
    public UpdateRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRolePathParams pathParams;
    public UpdateRoleRequest withPathParams(UpdateRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRoleUpdateRoleRequest request;
    public UpdateRoleRequest withRequest(UpdateRoleUpdateRoleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRoleSecurity security;
    public UpdateRoleRequest withSecurity(UpdateRoleSecurity security) {
        this.security = security;
        return this;
    }
}