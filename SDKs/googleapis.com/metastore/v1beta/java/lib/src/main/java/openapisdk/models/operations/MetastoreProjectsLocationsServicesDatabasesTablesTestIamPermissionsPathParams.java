package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}