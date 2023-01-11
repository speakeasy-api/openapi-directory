package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationSamlRoleRequest {
    public CreateOrganizationSamlRolePathParams pathParams;
    public CreateOrganizationSamlRoleRequest withPathParams(CreateOrganizationSamlRolePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationSamlRoleRequestBody request;
    public CreateOrganizationSamlRoleRequest withRequest(CreateOrganizationSamlRoleRequestBody request) {
        this.request = request;
        return this;
    }
}