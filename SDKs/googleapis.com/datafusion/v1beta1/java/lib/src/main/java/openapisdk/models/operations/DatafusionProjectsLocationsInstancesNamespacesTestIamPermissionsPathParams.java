package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}