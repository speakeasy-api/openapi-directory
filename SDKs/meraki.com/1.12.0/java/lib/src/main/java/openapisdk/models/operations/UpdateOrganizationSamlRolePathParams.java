package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSamlRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationSamlRolePathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=samlRoleId")
    public String samlRoleId;
    public UpdateOrganizationSamlRolePathParams withSamlRoleId(String samlRoleId) {
        this.samlRoleId = samlRoleId;
        return this;
    }
}