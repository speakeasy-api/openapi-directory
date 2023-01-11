package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloneOrganizationRequest {
    public CloneOrganizationPathParams pathParams;
    public CloneOrganizationRequest withPathParams(CloneOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CloneOrganizationRequestBody request;
    public CloneOrganizationRequest withRequest(CloneOrganizationRequestBody request) {
        this.request = request;
        return this;
    }
}