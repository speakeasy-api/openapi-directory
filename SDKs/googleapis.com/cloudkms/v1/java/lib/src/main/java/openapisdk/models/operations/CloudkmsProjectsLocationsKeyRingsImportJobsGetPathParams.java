package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}