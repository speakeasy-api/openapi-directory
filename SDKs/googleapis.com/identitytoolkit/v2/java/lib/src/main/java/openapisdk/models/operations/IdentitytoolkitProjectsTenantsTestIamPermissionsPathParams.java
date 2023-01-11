package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}