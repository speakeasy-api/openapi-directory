package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public MetastoreProjectsLocationsServicesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}