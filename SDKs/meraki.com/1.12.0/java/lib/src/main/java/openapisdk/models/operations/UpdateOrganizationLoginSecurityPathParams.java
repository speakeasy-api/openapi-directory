package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationLoginSecurityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationLoginSecurityPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}