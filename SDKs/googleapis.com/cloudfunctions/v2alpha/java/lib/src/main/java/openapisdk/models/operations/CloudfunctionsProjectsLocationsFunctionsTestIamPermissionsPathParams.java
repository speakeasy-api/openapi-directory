package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudfunctionsProjectsLocationsFunctionsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}