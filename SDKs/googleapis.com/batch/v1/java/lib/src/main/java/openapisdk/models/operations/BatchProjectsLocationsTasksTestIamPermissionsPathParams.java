package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsTasksTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BatchProjectsLocationsTasksTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}