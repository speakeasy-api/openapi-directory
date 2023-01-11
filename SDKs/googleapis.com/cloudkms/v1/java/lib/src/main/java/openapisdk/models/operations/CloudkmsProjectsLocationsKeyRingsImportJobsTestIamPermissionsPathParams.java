package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}