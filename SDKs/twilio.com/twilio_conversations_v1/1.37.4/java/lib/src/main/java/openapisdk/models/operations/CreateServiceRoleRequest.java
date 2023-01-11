package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceRoleRequest {
    public String serverURL;
    public CreateServiceRoleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateServiceRolePathParams pathParams;
    public CreateServiceRoleRequest withPathParams(CreateServiceRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateServiceRoleCreateServiceRoleRequest request;
    public CreateServiceRoleRequest withRequest(CreateServiceRoleCreateServiceRoleRequest request) {
        this.request = request;
        return this;
    }
    public CreateServiceRoleSecurity security;
    public CreateServiceRoleRequest withSecurity(CreateServiceRoleSecurity security) {
        this.security = security;
        return this;
    }
}