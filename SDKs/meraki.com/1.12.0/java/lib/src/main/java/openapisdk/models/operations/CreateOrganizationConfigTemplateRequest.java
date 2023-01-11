package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationConfigTemplateRequest {
    public CreateOrganizationConfigTemplatePathParams pathParams;
    public CreateOrganizationConfigTemplateRequest withPathParams(CreateOrganizationConfigTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationConfigTemplateRequestBody request;
    public CreateOrganizationConfigTemplateRequest withRequest(CreateOrganizationConfigTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}