package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}