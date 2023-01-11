package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationConfigTemplateRequest {
    public UpdateOrganizationConfigTemplatePathParams pathParams;
    public UpdateOrganizationConfigTemplateRequest withPathParams(UpdateOrganizationConfigTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationConfigTemplateRequestBody request;
    public UpdateOrganizationConfigTemplateRequest withRequest(UpdateOrganizationConfigTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}