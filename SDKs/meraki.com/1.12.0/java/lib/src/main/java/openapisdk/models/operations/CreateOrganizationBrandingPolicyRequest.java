package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationBrandingPolicyRequest {
    public CreateOrganizationBrandingPolicyPathParams pathParams;
    public CreateOrganizationBrandingPolicyRequest withPathParams(CreateOrganizationBrandingPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationBrandingPolicyRequestBody request;
    public CreateOrganizationBrandingPolicyRequest withRequest(CreateOrganizationBrandingPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}