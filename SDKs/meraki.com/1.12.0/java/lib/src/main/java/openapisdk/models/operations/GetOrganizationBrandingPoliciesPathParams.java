package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationBrandingPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationBrandingPoliciesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}