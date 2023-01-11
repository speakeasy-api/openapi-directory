package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClaimIntoOrganizationRequest {
    public ClaimIntoOrganizationPathParams pathParams;
    public ClaimIntoOrganizationRequest withPathParams(ClaimIntoOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ClaimIntoOrganizationRequestBody request;
    public ClaimIntoOrganizationRequest withRequest(ClaimIntoOrganizationRequestBody request) {
        this.request = request;
        return this;
    }
}