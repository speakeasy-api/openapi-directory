package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationBrandingPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CreateOrganizationBrandingPolicyPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}