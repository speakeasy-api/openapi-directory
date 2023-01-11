package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSamlRoleRequest {
    public UpdateOrganizationSamlRolePathParams pathParams;
    public UpdateOrganizationSamlRoleRequest withPathParams(UpdateOrganizationSamlRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationSamlRoleRequestBody request;
    public UpdateOrganizationSamlRoleRequest withRequest(UpdateOrganizationSamlRoleRequestBody request) {
        this.request = request;
        return this;
    }
}