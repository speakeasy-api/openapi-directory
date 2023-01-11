package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceRoleRequest {
    public String serverURL;
    public UpdateServiceRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceRolePathParams pathParams;
    public UpdateServiceRoleRequest withPathParams(UpdateServiceRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceRoleUpdateServiceRoleRequest request;
    public UpdateServiceRoleRequest withRequest(UpdateServiceRoleUpdateServiceRoleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceRoleSecurity security;
    public UpdateServiceRoleRequest withSecurity(UpdateServiceRoleSecurity security) {
        this.security = security;
        return this;
    }
}