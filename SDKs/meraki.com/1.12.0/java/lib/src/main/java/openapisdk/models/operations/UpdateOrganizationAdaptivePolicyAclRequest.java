package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationAdaptivePolicyAclRequest {
    public UpdateOrganizationAdaptivePolicyAclPathParams pathParams;
    public UpdateOrganizationAdaptivePolicyAclRequest withPathParams(UpdateOrganizationAdaptivePolicyAclPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationAdaptivePolicyAclRequestBody request;
    public UpdateOrganizationAdaptivePolicyAclRequest withRequest(UpdateOrganizationAdaptivePolicyAclRequestBody request) {
        this.request = request;
        return this;
    }
}