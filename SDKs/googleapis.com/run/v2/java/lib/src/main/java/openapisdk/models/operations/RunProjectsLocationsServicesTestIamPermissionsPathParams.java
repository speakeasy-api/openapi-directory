package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public RunProjectsLocationsServicesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}