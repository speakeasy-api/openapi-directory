package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}