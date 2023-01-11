package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationLoginSecurityRequest {
    public UpdateOrganizationLoginSecurityPathParams pathParams;
    public UpdateOrganizationLoginSecurityRequest withPathParams(UpdateOrganizationLoginSecurityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationLoginSecurityRequestBody request;
    public UpdateOrganizationLoginSecurityRequest withRequest(UpdateOrganizationLoginSecurityRequestBody request) {
        this.request = request;
        return this;
    }
}