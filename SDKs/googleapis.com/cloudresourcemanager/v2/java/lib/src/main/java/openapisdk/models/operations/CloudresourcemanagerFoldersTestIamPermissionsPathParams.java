package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudresourcemanagerFoldersTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}