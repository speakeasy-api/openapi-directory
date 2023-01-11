package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}