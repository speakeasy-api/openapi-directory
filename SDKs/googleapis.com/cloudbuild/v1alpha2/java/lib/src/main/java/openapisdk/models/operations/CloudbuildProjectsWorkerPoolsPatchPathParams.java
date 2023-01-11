package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsWorkerPoolsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbuildProjectsWorkerPoolsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}