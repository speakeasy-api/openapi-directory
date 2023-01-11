package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ServicebrokerTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}