package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DatafusionProjectsLocationsInstancesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}