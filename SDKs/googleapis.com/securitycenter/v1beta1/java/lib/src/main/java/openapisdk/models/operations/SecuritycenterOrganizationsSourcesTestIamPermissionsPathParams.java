package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}