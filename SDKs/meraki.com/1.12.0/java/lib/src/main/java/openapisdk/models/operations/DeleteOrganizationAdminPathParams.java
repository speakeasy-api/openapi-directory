package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationAdminPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adminId")
    public String adminId;
    public DeleteOrganizationAdminPathParams withAdminId(String adminId) {
        this.adminId = adminId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationAdminPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}