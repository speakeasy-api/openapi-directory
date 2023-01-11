package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IapTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}