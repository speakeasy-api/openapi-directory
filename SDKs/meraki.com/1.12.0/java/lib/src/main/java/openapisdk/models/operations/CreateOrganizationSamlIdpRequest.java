package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationSamlIdpRequest {
    public CreateOrganizationSamlIdpPathParams pathParams;
    public CreateOrganizationSamlIdpRequest withPathParams(CreateOrganizationSamlIdpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationSamlIdpRequestBody request;
    public CreateOrganizationSamlIdpRequest withRequest(CreateOrganizationSamlIdpRequestBody request) {
        this.request = request;
        return this;
    }
}