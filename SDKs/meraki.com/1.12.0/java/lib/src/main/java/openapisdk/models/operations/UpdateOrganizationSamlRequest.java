package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSamlRequest {
    public UpdateOrganizationSamlPathParams pathParams;
    public UpdateOrganizationSamlRequest withPathParams(UpdateOrganizationSamlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationSamlRequestBody request;
    public UpdateOrganizationSamlRequest withRequest(UpdateOrganizationSamlRequestBody request) {
        this.request = request;
        return this;
    }
}