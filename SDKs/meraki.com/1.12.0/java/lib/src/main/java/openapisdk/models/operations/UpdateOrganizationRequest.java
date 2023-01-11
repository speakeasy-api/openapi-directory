package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationRequest {
    public UpdateOrganizationPathParams pathParams;
    public UpdateOrganizationRequest withPathParams(UpdateOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationRequestBody request;
    public UpdateOrganizationRequest withRequest(UpdateOrganizationRequestBody request) {
        this.request = request;
        return this;
    }
}