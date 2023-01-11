package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationBrandingPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=brandingPolicyId")
    public String brandingPolicyId;
    public UpdateOrganizationBrandingPolicyPathParams withBrandingPolicyId(String brandingPolicyId) {
        this.brandingPolicyId = brandingPolicyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationBrandingPolicyPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}