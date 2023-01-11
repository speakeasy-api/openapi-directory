package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationSamlRolesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationSamlRolesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}