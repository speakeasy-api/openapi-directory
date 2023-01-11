package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSamlIdpRequest {
    public UpdateOrganizationSamlIdpPathParams pathParams;
    public UpdateOrganizationSamlIdpRequest withPathParams(UpdateOrganizationSamlIdpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationSamlIdpRequestBody request;
    public UpdateOrganizationSamlIdpRequest withRequest(UpdateOrganizationSamlIdpRequestBody request) {
        this.request = request;
        return this;
    }
}