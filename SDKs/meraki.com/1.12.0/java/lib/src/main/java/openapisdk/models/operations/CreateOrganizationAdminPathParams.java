package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationAdminPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CreateOrganizationAdminPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}