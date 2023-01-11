package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}