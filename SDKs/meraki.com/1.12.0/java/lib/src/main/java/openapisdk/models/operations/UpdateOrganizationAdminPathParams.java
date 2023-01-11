package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationAdminPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adminId")
    public String adminId;
    public UpdateOrganizationAdminPathParams withAdminId(String adminId) {
        this.adminId = adminId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationAdminPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}