package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsWorkerPoolsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbuildProjectsWorkerPoolsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}