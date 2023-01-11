package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationApplianceSecurityIntrusionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationApplianceSecurityIntrusionPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}