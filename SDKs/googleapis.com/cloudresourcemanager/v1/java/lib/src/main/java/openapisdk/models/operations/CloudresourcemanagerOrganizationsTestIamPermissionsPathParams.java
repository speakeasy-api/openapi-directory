package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudresourcemanagerOrganizationsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}