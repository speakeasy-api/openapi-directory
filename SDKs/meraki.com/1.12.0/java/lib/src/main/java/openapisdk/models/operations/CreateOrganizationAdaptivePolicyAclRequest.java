package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationAdaptivePolicyAclRequest {
    public CreateOrganizationAdaptivePolicyAclPathParams pathParams;
    public CreateOrganizationAdaptivePolicyAclRequest withPathParams(CreateOrganizationAdaptivePolicyAclPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationAdaptivePolicyAclRequestBody request;
    public CreateOrganizationAdaptivePolicyAclRequest withRequest(CreateOrganizationAdaptivePolicyAclRequestBody request) {
        this.request = request;
        return this;
    }
}