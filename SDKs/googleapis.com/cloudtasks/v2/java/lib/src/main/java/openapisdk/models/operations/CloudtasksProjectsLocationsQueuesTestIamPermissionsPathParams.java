package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudtasksProjectsLocationsQueuesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}