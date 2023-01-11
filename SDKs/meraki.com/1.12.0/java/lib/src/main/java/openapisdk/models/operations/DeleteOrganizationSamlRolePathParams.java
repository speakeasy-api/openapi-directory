package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationSamlRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationSamlRolePathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=samlRoleId")
    public String samlRoleId;
    public DeleteOrganizationSamlRolePathParams withSamlRoleId(String samlRoleId) {
        this.samlRoleId = samlRoleId;
        return this;
    }
}