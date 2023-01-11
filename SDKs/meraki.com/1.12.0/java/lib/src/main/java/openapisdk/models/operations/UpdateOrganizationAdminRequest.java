package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationAdminRequest {
    public UpdateOrganizationAdminPathParams pathParams;
    public UpdateOrganizationAdminRequest withPathParams(UpdateOrganizationAdminPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationAdminRequestBody request;
    public UpdateOrganizationAdminRequest withRequest(UpdateOrganizationAdminRequestBody request) {
        this.request = request;
        return this;
    }
}