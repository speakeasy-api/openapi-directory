package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationBrandingPoliciesPrioritiesRequest {
    public UpdateOrganizationBrandingPoliciesPrioritiesPathParams pathParams;
    public UpdateOrganizationBrandingPoliciesPrioritiesRequest withPathParams(UpdateOrganizationBrandingPoliciesPrioritiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationBrandingPoliciesPrioritiesRequestBody request;
    public UpdateOrganizationBrandingPoliciesPrioritiesRequest withRequest(UpdateOrganizationBrandingPoliciesPrioritiesRequestBody request) {
        this.request = request;
        return this;
    }
}