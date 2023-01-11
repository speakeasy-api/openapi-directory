package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationAdminRequest {
    public CreateOrganizationAdminPathParams pathParams;
    public CreateOrganizationAdminRequest withPathParams(CreateOrganizationAdminPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationAdminRequestBody request;
    public CreateOrganizationAdminRequest withRequest(CreateOrganizationAdminRequestBody request) {
        this.request = request;
        return this;
    }
}