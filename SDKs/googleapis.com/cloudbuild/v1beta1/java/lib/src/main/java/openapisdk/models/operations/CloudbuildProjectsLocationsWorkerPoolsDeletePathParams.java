package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsLocationsWorkerPoolsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbuildProjectsLocationsWorkerPoolsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}