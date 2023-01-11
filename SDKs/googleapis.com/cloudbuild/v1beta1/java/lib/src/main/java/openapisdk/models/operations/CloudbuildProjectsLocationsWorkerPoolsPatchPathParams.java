package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsLocationsWorkerPoolsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbuildProjectsLocationsWorkerPoolsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}