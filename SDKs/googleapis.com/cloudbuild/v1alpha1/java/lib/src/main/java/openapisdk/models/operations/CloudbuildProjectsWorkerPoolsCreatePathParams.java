package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsWorkerPoolsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudbuildProjectsWorkerPoolsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}